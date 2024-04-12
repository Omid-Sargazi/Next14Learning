"use client"
export default function ErrorBoundary({error, reset}:{
    error:Error;reset:()=>void;
}){
    return <div className="text-xl bg-gary-500">
        Error in reviewId
        {error.message}
        <button onClick={reset}>Try again</button>
        </div>
}