interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-5 h-5 text-base',
    md: 'w-8 h-8 text-xl',
    lg: 'w-9 h-9 text-4xl'
  }

  const innerSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-6 h-6',
    lg: 'w-7.5 h-7.5 pb-1.5'
  }

  return (
    <p className={`${sizes[size]} bg-white rounded-full p-0.5 mb-0.5 border border-black`}>
      <span className={`flex items-center align-middle justify-center
                       font-bold pb-0.5 ${innerSizes[size]} bg-black text-white rounded-full
                       leading-none`}>⊕</span>
    </p>
  )
}
