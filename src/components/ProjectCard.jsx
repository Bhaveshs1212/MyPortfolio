import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  const previewTech = project.getPreviewTechnologies(5);
  const remainingCount = project.getRemainingTechCount(5);
  const previewFeatures = project.getPreviewFeatures(2);

  return (
    <div className="rounded-2xl border border-[#1F1F1F] bg-[#0F0F10] shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] overflow-hidden group">
      <Link
        to={`/projects/${project.slug}`}
        className="block hover:opacity-90 transition-opacity duration-300"
      >
        {/* GRID — 28% left / 72% right split on desktop, stack on mobile */}
        <div className="grid md:grid-cols-[32%_68%]">
          
          {/* LEFT IMAGE PANEL - Dark Gray Background */}
          <div className="bg-black flex flex-col">
            {/* Full image visible (no crop) */}
            <div className="w-full">
              {project.hasImage() ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center">
                  <span className="text-black/40 text-sm font-bold">{project.title}</span>
                </div>
              )}
            </div>

            {/* Tagline below image */}
            <div className="bg-black/80 px-3 md:px-4 py-1.5">
              <p className="text-white text-[11px] md:text-xs font-semibold leading-tight line-clamp-1">
                {project.tagline}
              </p>
            </div>
          </div>

        {/* RIGHT CONTENT PANEL - Pure Black */}
        <div className="bg-[#0B0B0C] p-2 md:p-2.5 flex flex-col relative justify-between md:border-l md:border-[#1F1F1F]">
          {project.featured && (
            <div className="flex justify-end mb-1">
              <span className="text-[#00D9FF] text-[7px] md:text-[8px] font-bold uppercase tracking-wider">
                FEATURED
              </span>
            </div>
          )}
          
          {/* Title */}
          <h2 className="text-white text-[11px] md:text-xs font-bold pr-10 md:pr-12">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-0.5 text-[#B0B0B0] text-[9px] md:text-[10px] leading-snug line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Features List */}
          <ul className="mt-1 md:mt-1.5 space-y-0.5">
            {previewFeatures.map((feature, i) => (
              <li key={i} className="text-[#B0B0B0] text-[9px] md:text-[10px] flex items-start leading-snug">
                <span className="mr-1 text-white/60">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {project.keyFeatures.length > 2 && (
              <li className="text-[#999999] text-[9px] md:text-[10px] flex items-start">
                <span className="mr-1 text-white/40">•</span>
                <span>+{project.keyFeatures.length - 2} more features</span>
              </li>
            )}
          </ul>

          {/* Tech Stack - pushed to bottom */}
          <div className="pt-1.5 md:pt-2 flex flex-wrap gap-1 mt-auto">
            {previewTech.map((tech, i) => (
              <TechBadge key={i} technology={tech} className="text-[9px] md:text-[10px] px-2 py-0.5 gap-1" />
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-1 text-[9px] md:text-[10px] rounded-full bg-[#1A1A1A] text-[#B0B0B0] border border-[#333333] font-medium flex items-center">
                +{remainingCount}
              </span>
            )}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
