import { useState } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('bhavesh.singhjayash@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      <div className="max-w-4xl mx-auto px-8 py-24">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 text-xs">Available for new projects</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-[#F2F2F2]">
            Building products that drive growth
          </h1>
          
          <p className="text-[#9A9A9A] leading-relaxed max-w-3xl">
            I partner with startups and growing companies to transform ideas into market-ready products. Specializing in full-stack 
            development with a focus on speed, scalability, and user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* MVP Development */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold">MVP Development</h3>
            </div>
            <p className="text-[#9A9A9A] text-sm mb-3">Launch-ready products in 4-8 weeks</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">React</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Node.js</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">MongoDB</span>
            </div>
          </div>

          {/* SaaS Platforms */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold">SaaS Platforms</h3>
            </div>
            <p className="text-[#9A9A9A] text-sm mb-3">Scalable architecture for growth</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Next.js</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">PostgreSQL</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">AWS</span>
            </div>
          </div>

          {/* Web Applications */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold">Web Applications</h3>
            </div>
            <p className="text-[#9A9A9A] text-sm mb-3">Modern full-stack solutions</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">React</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Express</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">JavaScript</span>
            </div>
          </div>

          {/* Admin Dashboards */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold">Admin Dashboards</h3>
            </div>
            <p className="text-[#9A9A9A] text-sm mb-3">Data-driven business insights</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">React</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">D3.js</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Python</span>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">2+</div>
            <div className="text-[#9A9A9A] text-xs">Years Building Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
            <div className="text-[#9A9A9A] text-xs">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-[#9A9A9A] text-xs">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">48hrs</div>
            <div className="text-[#9A9A9A] text-xs">Response Time</div>
          </div>
        </div>

        {/* Profile and Additional Info Section */}
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          
          {/* Left Column - Additional Info */}
          <div className="space-y-6">
            
            {/* What I Do Best */}
            <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
              <h3 className="text-white font-semibold mb-4">What I Do Best</h3>
              <ul className="space-y-2 text-[#9A9A9A] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 text-xs">•</span>
                  <span>Transform business requirements into technical solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 text-xs">•</span>
                  <span>Build scalable applications that grow with your business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 text-xs">•</span>
                  <span>Optimize performance and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 text-xs">•</span>
                  <span>Implement modern development best practices</span>
                </li>
              </ul>
            </div>

            {/* Development Approach */}
            <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
              <h3 className="text-white font-semibold mb-4">Development Approach</h3>
              <p className="text-[#9A9A9A] text-sm leading-relaxed">
                I believe in building products that are not just functional, but also maintainable, scalable, and user-centric. 
                Every project starts with understanding your business goals and translating them into clean, efficient code.
              </p>
            </div>

          </div>

          {/* Right Column - Profile Card */}
          <div>
            <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 sticky top-8 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.03]">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg bg-white/10 flex-shrink-0">
                  <img 
                    src="/Profile-image.png" 
                    alt="Bhavesh Singh"
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-110"
                  />
                </div>
              </div>
              
              {/* Name and Title */}
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold">Bhavesh Singh</h3>
                <p className="text-[#9A9A9A] text-sm">Full-Stack Developer & Product Builder</p>
              </div>
              
              <p className="text-[#9A9A9A] text-sm mb-4">
                Helping startups and businesses launch faster with clean code, modern architecture, and strategic technical decisions.
              </p>

              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm mb-2">CORE TECHNOLOGIES</h4>
                <div className="flex gap-1 flex-wrap">
                  <span className="px-2 py-1 bg-[#333] text-white text-xs rounded text-[#E0E0E0]">React</span>
                  <span className="px-2 py-1 bg-[#333] text-white text-xs rounded text-[#E0E0E0]">Node.js</span>
                  <span className="px-2 py-1 bg-[#333] text-white text-xs rounded text-[#E0E0E0]">MongoDB</span>
                  <span className="px-2 py-1 bg-[#333] text-white text-xs rounded text-[#E0E0E0] font-medium shadow-lg ">AWS</span>
                  <span className="px-2 py-1 bg-[#333] text-white text-xs rounded text-[#E0E0E0] font-medium shadow-lg ">JavaScript</span>
                  <span className="px-2 py-1 bg-[#333] text-white text-xs rounded text-[#E0E0E0]">TypeScript</span>
                </div>
              </div>

              <div className="mb-4">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-2 p-3 bg-[#333] border border-[#555] rounded-lg w-full hover:bg-[#444] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#9A9A9A]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-white text-sm">bhavesh.singhjayash@gmail.com</div>
                    <div className="text-[#9A9A9A] text-xs">
                      {emailCopied ? 'Copied!' : 'Click to copy'}
                    </div>
                  </div>
                </button>
              </div>

              <Link 
                to="/connect"
                className="block w-full bg-white text-black text-center py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Let's Work Together
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
