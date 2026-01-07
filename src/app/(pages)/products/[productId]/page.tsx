import { ProductI } from '@/interfaces/product';
import { Params } from 'next/dist/server/request/params';
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import ProducrSlider from '@/components/ProductSlider/ProductSlider';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import AddToCart from '@/components/AddToCart/AddToCart';



export default async function ProductDetails({params}:{params:Params}) {

    // let x =await params ;
    // console.log(x);
    let {productId} = await params ;

     
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/products/'+productId);
    // const data = await response.json();
    const{data:product}:{data:ProductI}=await response.json();
    console.log(product);
    
  return<>
   <Card className='grid grid-cols-3 mt-4 items-center'>
    <div className="col-span-1">

     <ProductSlider images={product.images} altContent={product.title}/>
    </div>
   <div className="md:col-span-2 mx-auto md:w-full space-y-6 ">
    <CardHeader>
              <CardDescription className=' text-2xl md:text-4xl'>{product.brand.name}</CardDescription>
              <CardTitle className='text-xl md:text-3xl'>{product.title}</CardTitle>
             <CardDescription className=' text-sm md:text-2xl'>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
    <p>{product.category.name}</p>
  </CardContent>
  <CardFooter className='flex justify-center flex-col gap-5'>
    <div className="flex flex-col md:flex-row md:gap-6 font-bold">
     <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
      <p className='px-5 md:text-2xl '>{product.ratingsAverage}</p>
      </div>
      <p className=' md:text-2xl '>rating quantity : {product.ratingsQuantity}</p>
    </div>     
     <div className="flex flex-col md:flex-row md:justify-between font-bold md:gap-6">
     <p className='md:text-2xl'>Price :  <span>{product.price}  </span>EGY</p>
     <span className='md:text-2xl'> Remaining Units : {product.quantity}</span>
     </div>
    
     <AddToCart productId={product.id}/>
  </CardFooter>
   </div>
</Card>
  </>
}
