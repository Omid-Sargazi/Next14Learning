import React from 'react'
import {notFound} from "next/navigation"

export default function ReviewId({params}:{
    params:{
        productsId:string,
        reviewId:string,

    }
}) {
    if(parseInt(params.reviewId)>1000){
        notFound() 
    }
  return (
    <div>
        <h1>Review {params.reviewId} Products {params.productsId}</h1>
    </div>
  )
}
