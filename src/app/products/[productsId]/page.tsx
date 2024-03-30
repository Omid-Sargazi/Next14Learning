import React from 'react'

export default function ProductsDetails({params}:{
    params:{productsId:string}
}) {
  return (
    <div>ProductsDetails {params.productsId}</div>
  )
}
