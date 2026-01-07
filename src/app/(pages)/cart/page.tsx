"use client"


import React, { useContext, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatCurrency } from '@/helpers/formatPrice'
import { CartContext } from '@/components/Context/CartContext'
import Loading from '@/app/loading'
import { CartResponse } from '@/interfaces/Cart'
import toast from 'react-hot-toast'
import { Loader2, Trash2 } from 'lucide-react'
import CheckOut from '@/components/CheckOut/CheckOut'




export default function Cart() {
 let{cartData,isLoading,setCartData}= useContext(CartContext);
 const [removingId, setRemovingId]=useState<string | null>(null);
 const [updateId, setUpdateId]=useState<string | null>(null);
 const [isClearing, setIsClearing]=useState<boolean>(false);

 async function removeCartItem(productId:string){
  setRemovingId(productId);
  const response = await fetch ('https://ecommerce.routemisr.com/api/v1/cart/'+productId,{
    method:"DELETE",
  headers: {
  token: localStorage.getItem("userToken") || "",
}

  });
  const data:CartResponse = await response.json();
  console.log(data);
  if(data.status=="success"){
    toast.success('product removed successfully');
    setCartData(data);
  }
  setRemovingId(null);
  
 }

  async function updateCartItemCount (productId:string,count:number){
 if(count==0){
  removeCartItem(productId)
 } else {
  setUpdateId(productId);
    const response = await fetch ('https://ecommerce.routemisr.com/api/v1/cart/'+productId,{
    method:"PUT",
    body: JSON.stringify({count}),
    headers :{
       token: localStorage.getItem("userToken") || "",
     "Content-Type": "application/json"

    }
  });
   const data:CartResponse = await response.json();
  console.log(data);
  if(data.status=="success"){
    toast.success('product updated successfully');
    setCartData(data);
  }
  setUpdateId(null);
 }

 }

 async function clearCart(){
  setIsClearing(true);
  const response = await fetch ('https://ecommerce.routemisr.com/api/v1/cart/',{
    method:"DELETE",
    headers :{
      token: localStorage.getItem("userToken") || "",
    }
  });

  const data:CartResponse = await response.json();
  console.log(data);
  if(data.message=="success"){
    setCartData(null);
  }
   setIsClearing(false);
  
 }

if (!isLoading && (!cartData || cartData.numOfCartItems === 0)) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-semibold">🙄 Your Cart Is Empty 🙄</h2>

       <Button className='my-4 w-40 xl:w-80 mx-auto py-6 xl:text-xl dark:bg-gray-500 bg-green-200 text-black border border-black hover:bg-green-400 hover:text-black focus:bg-white focus:text-black cursor-pointer'>
        <Link href="/products">Start Shopping</Link>
      </Button>
    </div>
  );
}
if (isLoading) return <Loading />;

 
  return<>


  {isLoading? <Loading/>:cartData?.numOfCartItems!>0?
  
  <div className="container mx-auto px-4 py-6">
   <div className="flex flex-col justify-center items-center pt-4 space-y-4">
       <h2 className='text-center text-3xl'>Shopping Cart</h2>
    <span> your total cart items is :  {cartData?.numOfCartItems}</span>
  </div>
  
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start mt-6">
    <div className="lg:col-span-2 shadow space-y-4">

     {cartData?.data.products.map((item)=>
    
     <div key={item._id}
      className='flex justify-evenly items-center shadow-xl border-4 border-b-gray-500/50'>
      <img 
      src={item.product.imageCover}
      alt={item.product.title} 
      className='w-30 h-30 rouded-lg object-cover md:w-60 md:h-60 hover:animate-pulse'/>
      <div className=" flex-1 min-w-0">

      <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 ms-1'>
        <div className="min-w-0">
           <h3 className='font-semibold text-base lg:text-2xl line-clamp-2'>
          {item.product.title}
        </h3>
        <p className='lg:text-xl'>{item.product.brand.name}</p>
        <p className='lg:text-xl'>{item.product.category.name}</p>
        </div>
      <div className=" mx-auto shrink-0">
      <div className="semi-bold">
        <p className='text-sm lg:text-xl text-center'> price :{formatCurrency(item.price)}</p>
      </div>
      </div>
      </div>


      <div className='mt-3 flex items-center justify-between'>
      
      <div className='flex items-center gap-2'>
       <button disabled = {item.count==1}
       onClick={()=>updateCartItemCount(item.product._id,item.count-1)}
        aria-label='decrease'
        className='size-10 px-3 rounded-lg border cursor-pointer '
        >
          -
       </button>
       <span className='w-6 text-center font-medium'>
         { updateId === item.product._id ? <Loader2 className='animate-spin'/>:
          item.count
          }
        </span>
        <button onClick={()=>updateCartItemCount(item.product._id,item.count+1)}
        aria-label='increase'
        className='size-10 px-3 rounded-lg border cursor-pointer '
        >
          +
       </button>
      </div>

       <Button disabled={removingId === item.product._id}

        onClick={()=>removeCartItem(item.product._id)
}
         className=' w-18 cursor-pointer mx-auto bg-red-400 flex gap-1 items-center'>
        {removingId==item.product.id&&<Loader2 className='animate-spin size-3'/>}
        remove</Button>
      </div>
      </div>
        </div> 
    )}

    </div>
   
   
    {cartData?.numOfCartItems&&cartData.numOfCartItems > 0 &&
        <div className="lg:col-span-1 shadow lg:sticky lg:top-18 lg:right-10 mt-2 mx-auto">
   <Card className=' bg-green-400 dark:bg-gray-200 dark:text-black roundded-3'>
  <CardHeader>
    <CardTitle className='font-extrabold text-xl text-center'>Order Summery</CardTitle>
  </CardHeader>
  <CardContent className='flex justify-between'>
    <p className='font-bold'>Subtotal ({cartData?.numOfCartItems})</p>
    <p>{formatCurrency(cartData?.data.totalCartPrice!)}</p>
  </CardContent>
   <CardContent className='flex justify-between'>
    <p className='font-bold'>Shipping</p>
    <p>Free</p>
  </CardContent>
  <hr/>
  <CardFooter className='flex justify-between'>
    <p className='font-extrabold'>Total</p>
    <p>{formatCurrency(cartData?.data.totalCartPrice!)}</p>
  </CardFooter>
  <div className="flex flex-col space-y-4 xl:w-90">
   <CheckOut cartId={cartData.cartId}/>
  <Button className=' w-40 xl:w-80 mx-auto py-6 xl:text-xl dark:bg-gray-500 bg-white text-black border border-black hover:bg-white hover:text-black focus:bg-white focus:text-black'>
    <Link href={"/products"}>Continue Shopping</Link>
    </Button>
  </div>
 
</Card>
<Button variant={'outline'} onClick={clearCart} className='my-3 text-destructive hover:text-destructive cursor-pointer flex mx-auto text-2xl
 dark:bg-red-700 dark:text-white dark:hover:bg-red-700 dark:hover:text-white'>
  {isClearing?<Loader2 className='animate-spin size-3'/>:<Trash2/>} clear cart
  </Button>
    </div>
    
     }
  </div>
  </div>:
  <div className="flex min-h-[60vh] justify-center items-center flex-col">
    <h2 className='text-3xl'>Your Cart Is Empty</h2>
    <Button className='my-4 w-40 xl:w-80 mx-auto py-6 xl:text-xl dark:bg-gray-500 bg-green-200 text-black border border-black hover:bg-green-400 hover:text-black focus:bg-white focus:text-black cursor-pointer'>
    <Link href={"/products"}>🙄Add Your First Product🙄</Link>
    </Button>
  </div>

  
}

  </>
}
