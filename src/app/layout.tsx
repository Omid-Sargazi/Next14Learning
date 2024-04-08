import { Metadata } from "next"


export const metadata:Metadata = {
  title: {
    // absolute:"",
    default:"Next.js Tutorial - Omid Sargazi",
    template:"%s | Omid_Sargazi"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className=" bg-blue-400">
          <h1 >Header</h1>
        </header>
        {children}
        <footer className=" bg-gray-500">
          <h1>Footer</h1>
          </footer>
        </body>
    </html>
  )
}