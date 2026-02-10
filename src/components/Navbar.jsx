import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between h-14 md:h-16 items-center">
          {/* Logo/Name */}
          <NavLink to="/" className="text-[#F2F2F2] font-semibold text-lg md:text-xl tracking-tight hover:text-white transition-colors">
            BS
          </NavLink>
          
          {/* Navigation Links */}
          <div className="flex space-x-4 md:space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-xs md:text-sm transition-colors duration-200 relative pb-1 ${
                  isActive ? 'text-[#00D9FF]' : 'text-[#9A9A9A] hover:text-[#F2F2F2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9FF]"></div>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-xs md:text-sm transition-colors duration-200 relative pb-1 ${
                  isActive ? 'text-[#00D9FF]' : 'text-[#9A9A9A] hover:text-[#F2F2F2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Projects
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9FF]"></div>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => 
                `text-xs md:text-sm transition-colors duration-200 relative pb-1 ${
                  isActive ? 'text-[#00D9FF]' : 'text-[#9A9A9A] hover:text-[#F2F2F2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Skills
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9FF]"></div>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-xs md:text-sm transition-colors duration-200 relative pb-1 ${
                  isActive ? 'text-[#00D9FF]' : 'text-[#9A9A9A] hover:text-[#F2F2F2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9FF]"></div>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/connect" 
              className={({ isActive }) => 
                `text-xs md:text-sm transition-colors duration-200 relative pb-1 ${
                  isActive ? 'text-[#00D9FF]' : 'text-[#9A9A9A] hover:text-[#F2F2F2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Connect
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9FF]"></div>}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
