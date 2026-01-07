
"use server"

import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function addToCartAction(productId: string) {
  const cookieStore = cookies();
  const cookieObj: Record<string, string> = {};
  cookieStore.getAll().forEach(c => {
    cookieObj[c.name] = c.value;
  });


  const token = await getToken({
    req: { cookies: cookieObj }, 
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.apiToken) {
    return { statusMsg: "fail", message: "Not authenticated" };
  }

  
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token.apiToken ?? "",
    },
    body: JSON.stringify({ productId }),
  });

  return await response.json();
}
