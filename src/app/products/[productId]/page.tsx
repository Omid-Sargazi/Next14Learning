import React from 'react'

export default function DetailsProducts({params}:{
    params:{productId:string}
}) {
  return (
    <div>DetailsProducts Page {params.productId}</div>
  )
}
