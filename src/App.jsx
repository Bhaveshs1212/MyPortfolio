import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Connect from './pages/Connect'
import Skills from './pages/Skills'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C]">
      {/* BS Trademark Logo */}
      <div className="hidden md:block fixed top-8 left-8 z-50">
        <span className="text-[#F2F2F2] font-semibold text-xl tracking-tight">BS</span>
      </div>
      
      <Sidebar />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
