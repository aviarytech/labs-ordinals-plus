interface LogoProps {
  size?: 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    md: 'w-8 h-8 text-[32px]',
    lg: 'w-10 h-10 text-[42px]'
  }

  const innerSizes = {
    md: 'w-6 h-6 pb-[4px] pr-[0.5px]',
    lg: 'w-8 h-8 pb-[6px] pr-[0.5px]'
  }

  return (
    <p className={`${sizes[size]} bg-white rounded-full flex items-center justify-center border border-black`}>
      <span className={`${innerSizes[size]} flex items-center justify-center font-bold bg-black text-white rounded-full`}>⊕</span>
    </p>
  )
}
