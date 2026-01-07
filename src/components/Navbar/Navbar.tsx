"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ShoppingCartIcon, UserIcon,SunIcon, MoonIcon, Loader2 } from "lucide-react"
import { Badge } from "../ui/badge"
import { Menu } from "lucide-react";
import { useState,useEffect, useContext  } from "react";
import { CartContext } from "../Context/CartContext";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const {isLoading,cartData}= useContext(CartContext);
    const session = useSession();
    console.log(session);
    
 useEffect(() => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    setDarkMode(true);
    document.documentElement.classList.add("dark");
  } else {
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
  }
}, []);



useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
   }, [darkMode]);

  return <> 
 <nav className="z-50 bg-blue-100 dark:bg-gray-600 py-2 text-2xl font-semibold shadow fixed top-0 right-0 left-0">
   <div className="container mx-auto">
      <div className="flex justify-between items-center">
    <h1><Link href={'/'}>Helal Mart</Link></h1>             
     <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} className="cursor-pointer" />
        </button>
      </div>
       <div className="hidden md:block">
   <NavigationMenu> 
  <NavigationMenuList>
       <NavigationMenuItem >
      <NavigationMenuLink asChild className="text-xl font-semibold">
        <Link href="/products">Products</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="text-xl font-semibold">
        <Link href="/categories">Categories</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="text-xl font-semibold">
        <Link href="/brands">Brands</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
    </NavigationMenu>
       </div>
         {isOpen && (
        <div className="absolute top-16 left-0 w-90 dark:bg-blue-300 bg-gray-600 shadow-md flex flex-col md:hidden">
          <Link href="/products" className="p-4 border-b text-white dark:text-black"onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/categories" className="p-4 border-b text-white dark:text-black"onClick={() => setIsOpen(false)}>Categories</Link>
          <Link href="/brands" className="p-4 border-b text-white dark:text-black"onClick={() => setIsOpen(false)}>Brands</Link>
        </div>
      )}
    <div className="flex items-center">
      {session.status=='authenticated'&&
       <h3 className="text-sm hover:cursor-pointer hover:animate-bounce"> Hi {session.data?.user.name}</h3>
      }
      
       <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-1 p-2 rounded cursor-pointer">
                {darkMode ? <SunIcon size={30} /> : <MoonIcon size={40} />}
       </button>

     <DropdownMenu>
  <DropdownMenuTrigger className="cursor-pointer outline-0">
    <UserIcon className="size-8"/>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {session.status=='authenticated'?<>
      <Link href={'/profile'}>
    <DropdownMenuItem className="cursor-pointer">
      Profile
    </DropdownMenuItem>
    </Link>
      <DropdownMenuItem onClick={()=>signOut({
        callbackUrl:'/'
      })} className="cursor-pointer">Logout</DropdownMenuItem>
    </>:<>
      <Link href={'/login'}>
    <DropdownMenuItem className="cursor-pointer">
      Login
    </DropdownMenuItem>
    </Link>
     <Link href={'/register'}>
    <DropdownMenuItem className="cursor-pointer">
      Register
    </DropdownMenuItem>
    </Link>
    </>}
   
   
   
   </DropdownMenuContent>
     </DropdownMenu>
     {session.status=='authenticated'&&
      <Link href={'/cart'} className="relative p-3">
       <ShoppingCartIcon className="size-8 cursor-pointer"/>
         <Badge className=" absolute top-0 end-0 h-5 min-w-5 rounded-full px-1">
          {isLoading?<Loader2 className="size-4 animate-spin"/>:
            <span>{cartData?.numOfCartItems}</span> 
       }
        </Badge>
     </Link>
     }
    </div>
  </div>
  </div>
 </nav>
  </>
}








       
    

