// 'use client'
// import React, { useEffect } from 'react'

// export default  function Allorders() {

  
//    async function getOrders(){
//       const response = await fetch('https://ecommerce.routemisr.com/api/v1/orders/user/'+ localStorage.getItem('userId'));
//       const data = await response.json();
//       console.log(data);
//    }
//    useEffect(()=>{
//     getOrders()
//    },[])

//  return <>
//  <h2 className='text-center py-7'>allorders</h2>

//   </>
// }
"use client"

import React, { useEffect, useState } from "react"

interface OrderItem {
  _id: string
  createdAt: string
  isPaid: boolean
  paidAt?: string
  isDelivered: boolean
}


export default function Allorders() {
  const [orders, setOrders] = useState<OrderItem[]>([])
  const [loadingOrders, setLoadingOrders] = useState<boolean>(true)

  useEffect(() => {
    async function getOrders() {
      const userId = localStorage.getItem("userId")
      if (!userId) {
        setLoadingOrders(false)
        return
      }

      try {
        const response = await fetch(
          `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
        )
        const data = await response.json()
        setOrders(data || [])
      } catch (error) {
        console.error("Error fetching orders:", error)
      } finally {
        setLoadingOrders(false)
      }
    }

    getOrders()
  }, [])

  if (loadingOrders)
    return <p className="text-center py-7 text-xl">Loading orders...</p>

  if (orders.length === 0)
    return <p className="text-center py-7 text-xl">No orders found.</p>

  return (
    <div className="max-w-4xl mx-auto py-7 space-y-6">
      <h2 className="text-center text-3xl font-bold mb-6">All Orders</h2>

      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order._id}
            className="border p-5 rounded shadow-md flex flex-col space-y-2 bg-white"
          >
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Paid:</strong> {order.isPaid ? "Yes" : "No"}
            </p>
            {order.isPaid && order.paidAt && (
              <p>
                <strong>Paid At:</strong>{" "}
                {new Date(order.paidAt).toLocaleString()}
              </p>
            )}
            <p>
              <strong>Delivered:</strong> {order.isDelivered ? "Yes" : "No"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}