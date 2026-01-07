import React from 'react'

export default function Footer() {
  return<>
  <div className="bg-blue-100/50 dark:bg-gray-600  pt-7 "> 
  <div className="container mx-auto ps-7">
     <div className=" flex flex-col md:flex-row justify-center md:justify-center items-start mx-auto p-7 font-bold gap-8">

       <div className=' w-full md:w-1/5  '>
       <div className="flex gap-2">
          <p className='bg-black dark:bg-white dark:text-black text-white w-10/100 h-10/100 text-center'>H</p>
        <h2 className='pb-3 font-extrabold'>Helal Mart</h2>
       </div>
        <p className='text-black/60 dark:text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni tempora ipsam ullam quaerat iste, corrupti illum impedit rerum dolorum?</p>
        <ul className='pt-4 space-y-4'>
            <li className='flex text-black/60 dark:text-white/50 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
               </svg>
               <p>28 mohammed mubarak st , elmhalla elkobra</p>
            </li>
            <li className='flex text-black/60 dark:text-white/50 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p>(+20)01156037472</p>
            </li>
            <li className='flex text-black/60 dark:text-white/50 gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
               </svg>
               <p>support@helalmart.com</p>
            </li>
        </ul>
       </div>
       <div className=' w-full md:w-1/5 '>
        <h2 className='pb-3 font-extrabold'>SHOP</h2>
        <ul className='text-black/60 dark:text-white/50 space-y-4'>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Garden</li>
            <li>Sports</li>
            <li>Deals</li>
        </ul>
       </div>
         <div className=' w-full md:w-1/5 '>
        <h2 className='pb-3 font-extrabold'>CUSTOMER SERVICES</h2>
        <ul className='text-black/60 dark:text-white/50 space-y-4'>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Take Your Order</li>
            <li>Returns & Exchanges</li>
            <li>Size Guide</li>
        </ul>
       </div>
         <div className=' w-full md:w-1/5 '>
        <h2  className='pb-3 font-extrabold'>ABOUT</h2>
        <ul className='text-black/60 dark:text-white/50 space-y-4'>
            <li>About Shopmart</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Sustainability</li>
        </ul>
       </div>
         <div className=' w-full md:w-1/5 '>
        <h2  className='pb-3 font-extrabold'>POLICES</h2>
        <ul className='text-black/60 dark:text-white/50 space-y-4'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cokkie Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
        </ul>
       </div>
    </div>
    </div> 
    
  </div>
  </>
}
