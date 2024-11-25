import Navbar from "@/components/Navbar"
import './globals.css'
import { Prompt } from 'next/font/google';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const prompt = Prompt({
  subsets: ['thai', 'latin'], 
  weight: ['400', '500', '700'], 
});

const layout = ({children}: LayoutProps) => {
  return (
    <html>
      <body>
      <main className={prompt.className}>
        <Navbar/>
        {children}
      </main>
      </body>
    </html>
  )
}
export default layout