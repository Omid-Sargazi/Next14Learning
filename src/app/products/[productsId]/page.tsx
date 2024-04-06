// import React from 'react'
// import { Metadata } from 'next'

// type Props = {
//   params:{
//     productsId:string
//   }
// }
// export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
//   const title = await new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve(`iPhone ${params.productsId}`)
//     },1000)
//   })
//   return {
//     title:`Product ${title}`
//   }
// }

// const ProductsDetails = ({params}:Props) => {
//   return (
//     <div>
//       ProductsDetails{params.productsId}
//     </div>
//   )
// }

// export default ProductsDetails

import React from "react";
import { Metadata } from "next";
import Link from "next/link";


type Props = {
  params:{
    productsId:string
  }
}
export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
  const title = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iPhone${params.productsId}`)
    },1000)
  })
  return{
    title:`Product ${title}`
  }
}

const ProductsDetails = ({params}:Props)=>{
  return(
    <div>
      ProductsDetails{params.productsId}
      <Link href={"/"}>Home</Link>
    </div>
  )
}
export default ProductsDetails;