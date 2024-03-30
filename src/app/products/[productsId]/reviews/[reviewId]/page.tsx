import React from 'react'

export default function ReviewId({params}:{
    params:{
        productsId:string,
        reviewId:string,

    }
}) {
  return (
    <div>
        <h1>Review {params.reviewId} Products {params.productsId}</h1>
    </div>
  )
}
