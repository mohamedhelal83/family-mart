"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {signIn} from 'next-auth/react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.email('invaild email').nonempty('email is required'),
  password: z.string().nonempty('password is required')
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/,'invaild password'),
})
type FormFields =z.infer<typeof formSchema>
export function LoginForm() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  let searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callback-url')
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password : ''
    },
  }) 
async function onSubmit(values: FormFields) {
  setisLoading(true);
  const apiResponse = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }
  );
  const apiData = await apiResponse.json();
  if (apiData?.token) {
    localStorage.setItem("userToken", apiData.token);
  }
  await signIn("credentials", {
    callbackUrl: callbackUrl ?? "/",
    redirect: true,
    email: values.email,
    password: values.password,
  });
  setisLoading(false);
}
  return (
    <Card className="p-6 w-sm">
      <Form {...form}>
      {searchParams.get('error')?
      <h2 className="text-destructive text-2xl text-center py-3">
        {searchParams.get('error')}</h2>:''}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="helal@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="helal@123" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="cursor-pointer w-full">
          {isLoading&&<Loader2 className="animate-spin"/>}Submit</Button>
      </form>
    </Form>
    </Card>
   
  )
}
