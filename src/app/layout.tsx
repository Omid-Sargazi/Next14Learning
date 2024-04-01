export const metadata = {
  title: 'Next.js',
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
