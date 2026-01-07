"use client"
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { HeartIcon, Loader2, ShoppingCartIcon } from 'lucide-react'
import { CardFooter } from '../ui/card'
import toast from 'react-hot-toast'
import { CartContext } from '../Context/CartContext'
import { addToCartAction } from '@/app/(pages)/products/_action/addToCart.action'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AddToCart({productId}:{productId:string}) {
   const [isLoading, setIsLoading] = useState(false);
   const{getCart}= useContext(CartContext);
   const session = useSession();
   let router = useRouter();
 async function addProductToCart(){
    if(session.status=="authenticated"){
      setIsLoading(true);
    const data = await addToCartAction(productId)
    await getCart()
    data.status == "success" && toast.success(data.message);
    setIsLoading(false);
    console.log(data); 
    }else{
     router.push('/login');
    }
 }
  return <>
      <CardFooter className='flex flex-col mx-auto'>
      <Button disabled={isLoading} onClick={addProductToCart} className='mb-3  cursor-pointer text-xl'>
        {isLoading?<Loader2 className='animate-spin'/>:<ShoppingCartIcon/>}
        Add To Cart</Button>
        <span className='flex gap-1 cursor-pointer hover:animate-ping hover:text-blue-700
        dark:hover:text-yellow-500 animate-none'>
         Favorite
        <HeartIcon/>
        </span>
      </CardFooter>
  </>
}
