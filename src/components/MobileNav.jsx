import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiHome, FiBriefcase, FiLink, FiCode, FiUser, FiMenu, FiX } from 'react-icons/fi';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/projects', label: 'Projects', icon: FiBriefcase },
    { path: '/connect', label: 'Connect', icon: FiLink },
    { path: '/skills', label: 'Skills', icon: FiCode },
    { path: '/about', label: 'About', icon: FiUser },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0D0D0D] border border-[#1F1F1F] rounded-full flex items-center justify-center text-[#F2F2F2] hover:text-[#00D9FF] hover:border-[#00D9FF] transition-all duration-300 shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0D0D] border-t border-[#1F1F1F] transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <nav className="p-6 pb-8">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-[#00D9FF] bg-[#00D9FF]/10'
                        : 'text-[#6F6F6F] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10'
                    }`
                  }
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
