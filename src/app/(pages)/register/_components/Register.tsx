"use client"
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Toaster, toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, registerSchemaForm } from '@/schema/Register.schema';
export default function Register() {
  const [showConfetti, setShowConfetti] = useState(false);
  const router = useRouter();
  const form = useForm<registerSchemaForm>({
        resolver:zodResolver(registerSchema),
        defaultValues:{
         name:'',
         email:'',
         password:'',
         rePassword:'',
         phone:''
        }
    });
   async function onSubmit(data: registerSchemaForm) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
       toast.success('User registered successfully!', {
    duration: 3000 
    
  });
      form.reset();
       setShowConfetti(true);
       setTimeout(() => {
    router.push('/login'); 
  }, 5000); 
    } else {
      toast.error(result.message || 'Registration failed', {
    duration: 3000,
    position: 'top-right',
  });
    }
  } catch (error) {
    console.error(error);
     toast.error('Something went wrong');
  }
}

  return<>
    <Toaster
  position="top-center" 
  toastOptions={{
    className: '',       
    style: {
      minWidth: '300px',  
      fontSize: '18px',  
      padding: '16px 24px',
      borderRadius: '12px',
      background: '#4ade80', 
      color: '#fff',
    },
  }}
/>
  {showConfetti && (
  <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
    numberOfPieces={1000}  
    gravity={0.2}          
    recycle={false}      
  />
)}
  <h2 className='my-5 text-center'>Register Now</h2>
  <Form {...form}>
    <form className='w-2/3 mx-auto' onSubmit={form.handleSubmit(onSubmit)}>
   <FormField
   name='name'
   control={form.control}
   render={({field})=>(
<FormItem>
    <FormLabel>name</FormLabel>
    <FormControl>
            <Input {...field}/>       
    </FormControl>
    <FormMessage/>
</FormItem>
   )}
   />
    <FormField
   name='email'
   control={form.control}
   render={({field})=>(
<FormItem>
    <FormLabel>email</FormLabel>
    <FormControl>
        <div>
            <Input type='email' {...field}/>
        </div>
    </FormControl>
    <FormMessage/>
</FormItem>
   )}
   />
    <FormField
   name='password'
   control={form.control}
   render={({field})=>(
<FormItem>
    <FormLabel>password</FormLabel>
    <FormControl>
            <Input type='password' autoComplete='off' {...field}/>  
    </FormControl>
    <FormMessage/>
</FormItem>
   )}
   />
     <FormField
   name='rePassword'
   control={form.control}
   render={({field})=>(
<FormItem>
    <FormLabel>Repassword</FormLabel>
    <FormControl>
            <Input type='password' autoComplete='off' {...field}/>
    </FormControl>
    <FormMessage/>
</FormItem>
   )}
   />
     <FormField
   name='phone'
   control={form.control}
   render={({field})=>(
<FormItem>
    <FormLabel>phone</FormLabel>
    <FormControl>
            <Input type='phone'{...field}/>
    </FormControl>
    <FormMessage/>
</FormItem>
   )}
   />
   <Button className=' cursor-pointer sm:w-75 bg-green-700 my-5 text-white mx-auto block'>Register</Button>
     </form>
  </Form>
  </>
}
