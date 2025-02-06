import Link from 'next/link'

import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.04)] z-[1000] hidden md:block">
      <nav className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center text-[#333333] text-2xl font-semibold mb-2 gap-2 no-underline hover:text-[#333333]"
        >
          <Logo size="md" /> Ordinals Plus
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="no-underline text-[#333333] font-medium hover:text-[#f7931a]">
            Home
          </Link>
          <Link href="/blog" className="no-underline text-[#333333] font-medium hover:text-[#f7931a]">
            Blog
          </Link>
          <Link href="/specifications" className="no-underline text-[#333333] font-medium hover:text-[#f7931a]">
            Specifications
          </Link>
          <a 
            href="https://github.com/decentralized-identity/labs-ordinals-plus"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#333333] font-medium hover:text-[#f7931a]"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
} 