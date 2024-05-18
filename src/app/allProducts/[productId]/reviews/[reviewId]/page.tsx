import { notFound } from "next/navigation";

export default function ReviewDetail({params}:{params:{productId:string;reviewId:string}})
{
    if(parseInt(params.reviewId)>100)
        {
            
            notFound();
                <h1>Please enter reviewId less than 100</h1>
           
        }
    return <>
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    </>
}