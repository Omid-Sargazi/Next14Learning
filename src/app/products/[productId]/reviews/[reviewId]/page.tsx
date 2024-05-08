import React from 'react'

export default function ReviewId({params}:{
    params:{reviewId: string, productId:string}
}) {
  return (
    <h1>Review {params.reviewId} from Product {params.productId}</h1>
  )
}
