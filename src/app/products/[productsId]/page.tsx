import React from 'react'
import { Metadata } from 'next'

type Props = {
    params:{
        productsId:string
    }
}
export const generateMetaData = ({params}:Props):Metadata =>{
    return {
        // title: `Product ${params.productsId}`
        title: "`Product ${params.productsId}`"
    }
}

export default function ProductsDetails({params,}:Props) {
  return (
    <div>ProductsDetails {params.productsId}</div>
  )
}
