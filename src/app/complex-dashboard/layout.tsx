// import UserAnalytics from "@/components/UserAnalytics"
// import RevenueMetrics from "@/components/RevenueMetrics"
// import Notification from "@/components/Notification"

export default function DashboardLayout({
    children,
    user,
    revenue,
    notification,

}:{
    children:React.ReactNode,
    user:React.ReactNode,
    revenue:React.ReactNode,
    notification:React.ReactNode,
}){
    return(
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
          {/* <UserAnalytics/>
            <RevenueMetrics/>  
            <Notification/> */}
        </>
    )
}