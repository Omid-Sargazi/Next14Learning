export default function ReviewProduct({params}:{params:{productId:string,reviewId:string}})
{
    return (
        <h1>Review {params.reviewId} for Product {params.productId}</h1>
    )
}