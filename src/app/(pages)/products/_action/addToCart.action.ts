
"use server"

import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function addToCartAction(productId: string) {
  const cookieStore =await cookies();
  const cookieObj: Record<string, string> = {};
  cookieStore.getAll().forEach(c => {
    cookieObj[c.name] = c.value;
  });


  const token = await getToken({
  req: { cookies: cookieObj } as any, 
  secret: process.env.NEXTAUTH_SECRET,
});

  if (!token?.apiToken) {
    return { statusMsg: "fail", message: "Not authenticated" };
  }

  
 const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // هنا قمنا بإضافة (token as any) وتأكدنا أنه نص
    "token": (token as any)?.apiToken || "", 
  } as any, // أضفنا as any هنا أيضاً لتجاوز اعتراض Overload
  body: JSON.stringify({
    productId: productId, // تأكد أن اسم المتغير صحيح عندك
  }),
});

  return await response.json();
}
