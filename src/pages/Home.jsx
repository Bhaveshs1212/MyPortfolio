import { Link } from 'react-router-dom'
import { techIcons } from '../data/techIcons'
import GitHubContributions from '../components/GitHubContributions'
import LinkStats from '../components/LinkStats'

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-32 pb-10 px-8">
        <p className="text-[#6F6F6F] text-xs uppercase tracking-wider mb-8">
          Developer / Builder / Open Source
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
          I experiment with ideas that push me forward.
        </h1>

        <div className="space-y-4 text-[#9A9A9A] leading-relaxed">
          <p>
            Hello! I'm <span className="text-[#F2F2F2]">Bhavesh Singh</span>, a developer from India who enjoys building practical, user-focused web applications and experimenting with new technologies.
          </p>
          <p>
            I've worked on multiple full-stack projects, explored real-world problem solving through internships and independent builds, and continuously improve my skills through hands-on development.
          </p>
          <p>
            I'm focused on strengthening my fundamentals in development and problem-solving while contributing to meaningful projects.
          </p>
        </div>

        <div className="mt-12 flex gap-6 items-center">
          <Link
            to="/contact"
            className="bg-white text-[#0B0B0C] px-6 py-3 rounded-lg font-medium"
          >
            Contact Me →
          </Link>
          <Link
            to="/projects"
            className="text-[#9A9A9A] hover:text-[#F2F2F2]"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* GitHub Activity Calendar */}
      <section className="max-w-4xl mx-auto py-16 px-">
        <h2 className="text-2xl font-semibold mb-6 px-8 text-[#F2F2F2]">GitHub Activity</h2>
        
        <GitHubContributions />
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-4xl mx-auto pb-16 px-8">
        <h2 className="text-2xl font-semibold mb-6 text-[#F2F2F2]">Tools that I have used</h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-3 items-center animate-scroll py-2" 
            style={{ animation: 'scroll 30s linear infinite' }}
          >
            {[...Object.values(techIcons), ...Object.values(techIcons)].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0"
                >
                  {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
          
          <div 
            className="flex gap-3 items-center animate-scroll-reverse py-2" 
            style={{ animation: 'scroll-reverse 25s linear infinite' }}
          >
            {[...Object.values(techIcons).reverse(), ...Object.values(techIcons).reverse()].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0"
                >
                  {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
          
          <div 
            className="flex gap-3 items-center animate-scroll py-2" 
            style={{ animation: 'scroll 35s linear infinite' }}
          >
            {[...Object.values(techIcons), ...Object.values(techIcons)].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-third-${index}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0"
                >
                  {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>    </div>
  )
}

export default Home
