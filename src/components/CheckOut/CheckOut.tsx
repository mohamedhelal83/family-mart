"use client"
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckOut({cartId}:{cartId:string}) {

    const detailsInput = useRef<HTMLInputElement|null>(null);
    const cityInput = useRef<HTMLInputElement|null>(null);
    const phoneInput = useRef<HTMLInputElement|null>(null);

       async function checkoutSession(){
        
        const shippingAddress = {
          details:detailsInput.current?.value,
          city:cityInput.current?.value,
          phone:phoneInput.current?.value
        }
        console.log(shippingAddress); 
        
        const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:"POST",
        body: JSON.stringify({shippingAddress}),
         headers :{
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDU5OGVmNDE4ODE5NzAyZjkxNmFhMCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3NzUwOTcxLCJleHAiOjE3NjU1MjY5NzF9.bF2Y_UbKxkkfWGrniB0X-Jq5rfmNnD8cJP_eCD4pHjs' ,
           "Content-Type": "application/json"
      
          }
        });
        const data = await response.json();
     
        if (data.status=="success"){
            location.href=data.session.url
        }
       }

  return <>
 
  

    <Dialog>
      <form className='mx-auto'>
        <DialogTrigger  asChild>
          <Button className='w-40 xl:w-80  py-6 xl:text-xl cursor-pointer  dark:bg-gray-400 dark:text-white dark:border border-black'
          >Proceed to Checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className='mx-auto'>Add Your Shipping Address</DialogTitle>
            <DialogDescription>
            Enter Your Address (address, home number and flat number)
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="city">City</Label>
              <Input ref={cityInput} id="city" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="details">Details</Label>
              <Input ref={detailsInput} id="details" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Input ref={phoneInput} id="phone" />
            </div>
           
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">cash</Button>
            <Button className='cursor-pointer' onClick={checkoutSession} type="submit">visa</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

  </>
}
