// import { CartResponse } from "@/interfaces/Cart";
// import { NextResponse } from "next/server";



// export async function GET(){
//       const response = await fetch ('https://ecommerce.routemisr.com/api/v1/cart',{
//             method:"GET",
//             headers:{
//                 token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDU5OGVmNDE4ODE5NzAyZjkxNmFhMCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3NzUwOTcxLCJleHAiOjE3NjU1MjY5NzF9.bF2Y_UbKxkkfWGrniB0X-Jq5rfmNnD8cJP_eCD4pHjs"
//             }
//         });
//         const data :CartResponse = await response.json();
//         return NextResponse.json(data)
// }
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "API is working" });
}