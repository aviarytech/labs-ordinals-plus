import { ReactNode } from 'react'

interface AccordionProps {
  id: string
  title: string
  children: ReactNode
}

export default function Accordion({ id, title, children }: AccordionProps) {
  return (
    <div className="accordion tab mb-8">
      <input type="checkbox" id={id} className="absolute opacity-0 z-[-1]" />
      <label 
        htmlFor={id} 
        className="tab__label flex justify-between p-6 font-bold cursor-pointer bg-white relative before:content-[''] before:absolute before:block before:w-full before:h-[6px] before:bottom-0 before:left-0 before:bg-gradient-to-b before:from-transparent before:via-[#f7931a] before:to-transparent before:bg-[length:100%_6px] before:bg-no-repeat before:transform before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:before:scale-x-100"
      >
        <h2 className="text-[#333333] text-2xl m-0 p-0">{title}</h2>
      </label>
      <div className="tab__content max-h-0 overflow-hidden transition-all duration-350 px-4 bg-white">
        {children}
      </div>
    </div>
  )
} 