import { Coffee } from 'lucide-react'

function Navigation() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Coffee className="w-8 h-8 text-coffee-500" />
          <span className="font-bold text-xl">Coffee Ecosystem</span>
        </div>
        <div className="space-x-6">
          {['hero', 'features', 'about', 'cta'].map((section) => (
            <button 
              key={section} 
              onClick={() => scrollToSection(section)}
              className="hover:text-coffee-500 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation