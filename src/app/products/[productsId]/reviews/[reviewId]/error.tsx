"use client"
export default function ErrorBoundary({error}:{
    error:Error
}){
    return <div className="text-xl bg-gary-500">
        Error in reviewId
        {error.message}
        </div>
}