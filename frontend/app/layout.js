"use client";
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';
import Background from './components/Background'; // Import the Background component



const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = useRouter();

  // Check if the current route is the front page
  const isFrontPage = router.pathname === '/';

  // Render background video only for the front page
  if (isFrontPage) {
    return (
      <html lang="en">
        <body>
          <Background /> {/* Render the Background component only for the front page */}
          {children}
        </body>
      </html>
    );
  }

  else if (!isFrontPage) {
    return (
      <html lang="en">
        <body className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/pic1.jpg')` }}>
            {children}
        </body>
      </html>
    );
  }

}
