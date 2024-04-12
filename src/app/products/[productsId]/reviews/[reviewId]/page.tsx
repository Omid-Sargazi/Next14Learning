import React from 'react'
import {notFound} from "next/navigation"

function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
}

export default function ReviewId({params}:{
    params:{
        productsId:string,
        reviewId:string,

    }
}) {
    const random = getRandomInt(2)
    if(random===0){
        throw new Error("Error Loading Review")
    }
    if(parseInt(params.reviewId)>1000){
        notFound() 
    }
  return (
    <div>
        <h1>Review {params.reviewId} Products {params.productsId}</h1>
    </div>
  )
}
