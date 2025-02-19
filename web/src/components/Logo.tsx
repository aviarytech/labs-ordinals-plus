import Image from 'next/image'

interface LogoProps {
  size?: 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  }

  return (
    <div className={`${sizes[size]} relative`}>
      <Image 
        src="/logo.png"
        alt="Ordinals Plus Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
