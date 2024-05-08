export default function DashboardLayer({
    children,notifications,revenue,users
}:{children:React.ReactNode;notifications:React.ReactNode;revenue:React.ReactNode;users:React.ReactNode})
{
    return (
        <div>
            <h1>Dashboard Layer</h1>
            <div>{children}</div>
            <div className=" flex flex-row">
                <div className=" flex flex-col">
                <div>{notifications}</div>
                <div>{revenue}</div>
                </div>
            <div className="flex flex-1">{users}</div>
            </div>
        </div>
    )
}