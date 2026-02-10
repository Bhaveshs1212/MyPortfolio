import { useState } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('harshvardhan0920@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-16 md:pb-16 w-full">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 text-sm font-medium">Available for new projects</span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-6 text-[#F2F2F2]">
            Building products that drive growth
          </h1>
          
          <p className="text-[#B0B0B0] text-base md:text-lg leading-relaxed max-w-3xl">
            I partner with startups and growing companies to transform ideas into market-ready products. Specializing in full-stack 
            development with a focus on speed, scalability, and user experience.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-4 md:gap-5">
          
          {/* Left Column - Services and Stats */}
          <div>
            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-2.5 md:gap-3 mb-4 md:mb-5">
          
          {/* MVP Development */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-lg p-3 md:p-4 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-cyan-400 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">MVP Development</h3>
            </div>
            <p className="text-[#B0B0B0] text-sm mb-3 leading-snug">Launch-ready products in 4-8 weeks</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">React</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Node.js</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">MongoDB</span>
            </div>
          </div>

          {/* SaaS Platforms */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-lg p-3 md:p-4 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-cyan-400 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">SaaS Platforms</h3>
            </div>
            <p className="text-[#B0B0B0] text-sm mb-3 leading-snug">Scalable architecture for growth</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Next.js</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">PostgreSQL</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">AWS</span>
            </div>
          </div>

          {/* AI Integration */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-lg p-3 md:p-4 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-cyan-400 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">AI Integration</h3>
            </div>
            <p className="text-[#B0B0B0] text-sm mb-3 leading-snug">GenAI features that drive value</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">OpenAI</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">LangChain</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">Python</span>
            </div>
          </div>

          {/* Admin Dashboards */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-lg p-3 md:p-4 hover:bg-[#1A1A1A] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-cyan-400 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">Admin Dashboards</h3>
            </div>
            <p className="text-[#B0B0B0] text-sm mb-3 leading-snug">Data-driven business insights</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">React</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">D3.js</span>
              <span className="px-2 py-1 bg-[#333] text-xs rounded text-[#E0E0E0]">FastAPI</span>
            </div>
          </div>

            </div>

            {/* Decorative Divider */}
            <div className="relative my-4 md:my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#2A2A2A]"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-[#0B0B0C] px-3">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-cyan-400/40"></div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400/60"></div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400/60"></div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400/40"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-[#B0B0B0] text-sm md:text-base">Years Building Products</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-[#B0B0B0] text-sm md:text-base">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-[#B0B0B0] text-sm md:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">48hrs</div>
                <div className="text-[#B0B0B0] text-sm md:text-base">Response Time</div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="flex justify-center md:justify-start">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 py-2 px-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#B0B0B0] hover:text-white hover:border-cyan-400/30 hover:bg-[#222] transition-all text-sm md:text-base font-medium">
              
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div>
            <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-lg p-4 md:p-5 sticky top-4">
              {/* Profile Image */}
              <div className="flex justify-center mb-4 md:mb-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg bg-white/10 flex-shrink-0">
                  <img 
                    src="/Profile-image.png" 
                    alt="Bhavesh"
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-110"
                  />
                </div>
              </div>
              
              {/* Name and Title */}
              <div className="text-center mb-4 md:mb-5">
                <h2 className="text-white text-lg md:text-xl font-bold mb-1">Bhavesh</h2>
                <p className="text-[#B0B0B0] text-xs font-medium mb-2 md:mb-3">Full-Stack Developer & Product Builder</p>
                <p className="text-[#B0B0B0] text-xs leading-relaxed">
                  Helping startups and businesses launch faster with clean code, modern architecture, and strategic technical decisions.
                </p>
              </div>

              {/* Core Technologies */}
              <div className="mb-4 md:mb-5">
                <h4 className="text-white font-bold text-xs mb-2 md:mb-3 uppercase tracking-wider">CORE TECHNOLOGIES</h4>
                <div className="flex gap-1.5 md:gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">React</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">Node.js</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">MongoDB</span>
                  <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded border border-orange-500/20">AWS</span>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">Python</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">TypeScript</span>
                </div>
              </div>

              {/* Email */}
              <div className="mb-3 md:mb-4">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-2 p-2 md:p-2.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg w-full hover:bg-[#222] transition-colors">
                
                  <svg className="w-3.5 h-3.5 text-[#B0B0B0]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-white text-xs truncate">bhavesh.singhjayash@gmail.com</div>
                    <div className="text-[#B0B0B0] text-[10px]">
                      {emailCopied ? 'Copied!' : 'Click to copy'}
                    </div>
                  </div>
                </button>
              </div>

              {/* CTA Button */}
              <Link 
                to="/connect"
                className="block w-full bg-white text-black text-center py-2.5 px-4 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/5"
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
