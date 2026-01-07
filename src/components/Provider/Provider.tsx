"use client"
import React, { ReactNode } from 'react'
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {Toaster} from "react-hot-toast"
import CartContextProvider from "@/components/Context/CartContext";
import { SessionProvider } from "next-auth/react";

export default function Provider({children}:{children:ReactNode}) {
  return <>
        <SessionProvider>
              <CartContextProvider>
          <Navbar/>
        <div className="container mx-auto p-4 pt-20">
          <Toaster/>
          {children}
          </div>  
        <Footer/>
        </CartContextProvider>
          </SessionProvider>
  </>
}
