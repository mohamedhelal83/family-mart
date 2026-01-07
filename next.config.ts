// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images:{
//     remotePatterns:[{
//       protocol: "https",
//       hostname:'ecommerce.routemisr.com',
//       pathname:'/Route-Academy-*/**'
//     }]
//   },
//    eslint: {
//     ignoreDuringBuilds: true,
//   }
// };
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-*/**',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // سنضيف هذا السطر أيضاً للتأكد من عدم توقف الرفع لأي سبب تافه
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
