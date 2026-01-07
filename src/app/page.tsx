import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
 <div className="container min-h-screen mx-auto
 flex flex-col justify-center items-center">
  <h1 className="text-6xl font-bold">Welcome To HelalMart</h1>
  <p className="py-6 text-center text-2xl">Discover the latest techonlogy, fashion, and lifestyle products. Quality guaranteed with<br/> fast shipping and excellent customer service .</p>
  <div className="flex pt-3 gap-3">
   <Button className="text-xl p-4 dark:bg-gray-400">
   <Link href={"/products"}>Shop Now</Link>
   </Button>      
    <Button className=" dark:bg-gray-400 text-xl p-4 bg-white text-black border border-black hover:bg-white hover:text-black focus:bg-white focus:text-black">
     <Link href={'/categories'}>Browse Categories</Link> 
      </Button>
  </div>
 </div>  
  </>
}
