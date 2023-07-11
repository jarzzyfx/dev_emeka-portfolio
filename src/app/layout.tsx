
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Dev EMEKA',
  description: 'Portfolio of developer called DEV emeka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='divide-y-[1px] divide-solid'>

    <Navbar />
        <main className="relative h-fit">
          {children}
        </main>
      <Footer/>

      </body>
    </html>
  )
}
