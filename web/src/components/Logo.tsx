interface LogoProps {
  size?: 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    md: 'w-9 h-9 text-[32px]',
    lg: 'w-11 h-11 text-[42px]'
  }

  const innerSizes = {
    md: 'w-7 h-7 pb-[4px] pr-[0.5px]',
    lg: 'w-9 h-9 pb-[6px] pr-[0.5px]'
  }

  return (
    <p className={`${sizes[size]} bg-white rounded-full flex items-center justify-center border border-black`}>
      <span className={`${innerSizes[size]} flex items-center justify-center font-bold bg-black text-white rounded-full`}>⊕</span>
    </p>
  )
}
