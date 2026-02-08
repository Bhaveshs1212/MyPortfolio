import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiCplusplus,
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiRedux,
  SiNodedotjs, 
  SiExpress, 
  SiJsonwebtokens,
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiPrisma,

  SiGit, 
  SiGithub, 
  SiVercel, 
  SiPostman
} from 'react-icons/si';
import { 
  FaServer,
  FaCloud
} from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF" },
        { name: "FastAPI", icon: FaServer, color: "#009688" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#FFFFFF" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" }
      ]
    }
  ];

  const stats = [
    { label: "Available for Projects", value: true, color: "#00D9FF" },
    { label: "Years Experience", value: "2+", color: "#00D9FF" },
    { label: "Projects Delivered", value: "15+", color: "#00D9FF" },
    { label: "Client Satisfaction", value: "100%", color: "#00D9FF" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2] flex items-center">
      <section className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#F2F2F2] text-sm uppercase tracking-[0.2em] font-medium mb-3 text-center" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)' }}>
            SKILLS
          </h1>
          <p className="text-[#6F6F6F] text-sm leading-relaxed">
           Production-ready expertise across the modern development stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-row justify-center gap-6 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-5 hover:border-[#00D9FF]/30 transition-all duration-300 group flex-shrink-0 w-52 h-52"
            >
              <h3 className="text-[#F2F2F2] font-semibold text-lg mb-5 text-center group-hover:text-[#00D9FF] transition-colors duration-300">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 h-32">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2  rounded-lg bg-[#111111] hover:bg-[#151515] transition-all duration-300 group/skill"
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/skill:scale-105"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <Icon 
                          size={18} 
                          style={{ color: skill.color }}
                          className="transition-all duration-300"
                        />
                      </div>
                      <span className="text-[#9A9A9A] text-xs font-medium text-center group-hover/skill:text-[#F2F2F2] transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
          {/* Decorative Line */}
        <div className="flex justify-center mt-2 mb-8">
          <div className="w-62 h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent"></div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center pt-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-2">
              {stat.value === true ? (
                <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse"></div>
              ) : null}
              <span className="text-[#9A9A9A] text-sm">
                {stat.label}
              </span>
              {stat.value !== true && (
                <span className="text-[#00D9FF] font-semibold text-sm">
                  {stat.value}
                </span>
              )}
            </div>
          ))}
        </div>

      
      </section>
    </div>
  );
}

export default Skills;