interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-5 h-5 text-[16px]',
    md: 'w-8 h-8 text-[24px]',
    lg: 'w-10 h-10 text-[38px]'
  }

  const innerSizes = {
    sm: 'w-4 h-4 pb-[3px]',
    md: 'w-6 h-6 pb-[3px]',
    lg: 'w-8 h-8 pb-[6px]'
  }

  return (
    <p className={`${sizes[size]} bg-white rounded-full flex items-center justify-center border border-black`}>
      <span className={`${innerSizes[size]} flex items-center justify-center font-bold bg-black text-white rounded-full
                       leading-none`}>⊕</span>
    </p>
  )
}
