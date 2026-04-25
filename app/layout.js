import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Go Trip Cabs - Airport Taxi, Outstation Cabs, Local Rental & Tour Packages in Bangalore',
  description: 'Go Trip Cabs - Book airport taxi, outstation cabs, local rentals and tour packages from Bangalore. Comfortable, Safe & Reliable. Call +91 9886673753',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="min-h-screen bg-white">
        {children}
        <Footer/>
      </body>
    </html>
  )
}
