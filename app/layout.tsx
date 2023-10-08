import Navbar from '@/components/navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portal App Puninar',
  description: 'Puninar Portal App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
