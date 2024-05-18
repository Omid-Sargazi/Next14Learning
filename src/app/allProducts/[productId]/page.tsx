"use client"
import { usePathname } from "next/navigation";
export default function ProductDetails({params}:{params:{productId:string}})
{
    const pathname = usePathname();
    console.log(pathname)
    return (
        <>
        <h1>A details of product is...{params.productId}</h1>
        </>
    )
}   