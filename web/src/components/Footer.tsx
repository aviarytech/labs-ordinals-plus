import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] pt-16 pb-8 px-8 mt-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-2"><Logo size="sm" /> Ordinals Plus</h4>
            <p className="text-[#495057]">Making Ordinals Great Again</p>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <a href="https://github.com/decentralized-identity/labs-ordinals-plus" className="text-[#495057] no-underline my-2">
              GitHub
            </a>
            <a href="/blog" className="text-[#495057] no-underline my-2">
              Blog
            </a>
            <a href="#docs" className="text-[#495057] no-underline my-2">
              Documentation
            </a>
            <a href="#about" className="text-[#495057] no-underline my-2">
              About
            </a>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <a href="https://github.com/brianorwhatever" className="text-[#495057] no-underline my-2">
              GitHub: @brianorwhatever
            </a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-[#495057]">
          <p className="text-[#495057]">&copy; 2024 Ordinals Plus - Making Ordinals Great Again</p>
        </div>
      </div>
    </footer>
  )
} 