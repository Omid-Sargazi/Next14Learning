import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </div>
  )
}
