import Link from 'next/link'
import React from 'react'


export default function Products() {
  return (
    <div className=''>
        <ul>
            <h1>Products List</h1>
            <Link href={"/products/1"}><li>Products 1</li></Link>
            <Link href={"/products/2"} replace><li>Products 2</li></Link>
            <Link href={"/products/3"}><li>Products 3</li></Link>
            <Link href={"/products/4"}><li>Products 4</li></Link>
            <Link href={"/products/5"}><li>Products 5</li></Link>
            
        </ul>
        <Link href={"/"}>Home</Link>
    </div>
  )
}
