import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  const previewTech = project.getPreviewTechnologies(5);
  const remainingCount = project.getRemainingTechCount(5);
  const previewFeatures = project.getPreviewFeatures(4);

  return (
    <div className="border border-[#2A2A2A] rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
      <Link
        to={`/projects/${project.slug}`}
        className="block hover:opacity-90 transition-opacity duration-300"
      >
        {/* GRID — 40% left / 60% right split */}
        <div className="grid md:grid-cols-[40%_60%] items-stretch">
          
          {/* LEFT IMAGE PANEL - Dark Gray Background */}
          <div className="relative bg-black flex flex-col">
          
          {/* Image container - no extra padding */}
          <div className="w-full bg-[#2A2D33] overflow-hidden">
            {project.hasImage() ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            ) : (
              <div className="w-full aspect-[4/3] flex items-center justify-center transition-transform duration-500 ease-out hover:scale-110">
                <span className="text-white/20 text-lg font-bold">{project.title}</span>
              </div>
            )}
          </div>
          
          {/* Tagline below image */}
          <div className="px-4 py-3 bg-black">
            <p className="text-white text-xs font-normal leading-tight">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT PANEL - Pure Black */}
        <div className="bg-black p-4 flex flex-col relative">
          
          {/* Date badge - top right */}
          {project.completionDate && (
            <div className="absolute top-4 right-4">
              <span className="text-[#888888] text-[9px] font-normal uppercase tracking-wider">
                {project.completionDate}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-white text-base font-semibold pr-16">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-2 text-[#AAAAAA] text-[11px] leading-snug">
            {project.shortDescription}
          </p>

          {/* Features List */}
          <ul className="mt-3 space-y-1 flex-1">
            {previewFeatures.map((feature, i) => (
              <li key={i} className="text-[#AAAAAA] text-[10px] flex items-start leading-snug">
                <span className="mr-1.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {project.keyFeatures.length > 4 && (
              <li className="text-[#777777] text-[10px] flex items-start">
                <span className="mr-1.5">•</span>
                <span>+{project.keyFeatures.length - 4} more features</span>
              </li>
            )}
          </ul>

          {/* Tech Stack - pushed to bottom */}
          <div className="pt-3 flex flex-wrap gap-1">
            {previewTech.map((tech, i) => (
              <TechBadge key={i} technology={tech} />
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-1 pt-1.5 text-[12px] rounded-md bg-[#1A1A1A] text-[#AAAAAA] border border-[#333333] font-medium">
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
