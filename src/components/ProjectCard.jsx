import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  const previewTech = project.getPreviewTechnologies(5);
  const remainingCount = project.getRemainingTechCount(5);
  const previewFeatures = project.getPreviewFeatures(4);

  return (
    <div className="border border-[#2A2A2A] rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] overflow-hidden group">
      <Link
        to={`/projects/${project.slug}`}
        className="block hover:opacity-90 transition-opacity duration-300"
      >
        {/* GRID — 28% left / 72% right split on desktop, stack on mobile */}
        <div className="grid md:grid-cols-[28%_72%] items-stretch">
          
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
                <span className="text-white/20 text-sm font-bold">{project.title}</span>
              </div>
            )}
          </div>
          
          {/* Tagline below image */}
          <div className="px-3 md:px-4 py-2 md:py-2.5 bg-black">
            <p className="text-white text-xs md:text-sm font-normal leading-tight">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT PANEL - Pure Black */}
        <div className="bg-black p-3 md:p-4 flex flex-col relative">
          
          {/* Featured Badge - top right */}
          {project.featured && (
            <div className="absolute top-3 md:top-4 right-3 md:right-4">
              <span className="text-[#00D9FF] text-[10px] md:text-xs font-bold uppercase tracking-wider border border-[#00D9FF] px-2 py-0.5 rounded">
                FEATURED
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-white text-base md:text-lg font-bold pr-20 md:pr-24">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-2 md:mt-2.5 text-[#B0B0B0] text-xs md:text-sm leading-snug">
            {project.shortDescription}
          </p>

          {/* Features List */}
          <ul className="mt-2.5 md:mt-3 space-y-1 flex-1">
            {previewFeatures.map((feature, i) => (
              <li key={i} className="text-[#B0B0B0] text-xs md:text-sm flex items-start leading-snug">
                <span className="mr-1.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {project.keyFeatures.length > 4 && (
              <li className="text-[#999999] text-xs md:text-sm flex items-start">
                <span className="mr-1.5">•</span>
                <span>+{project.keyFeatures.length - 4} more features</span>
              </li>
            )}
          </ul>

          {/* Tech Stack - pushed to bottom */}
          <div className="pt-3 md:pt-4 flex flex-wrap gap-1.5">
            {previewTech.map((tech, i) => (
              <TechBadge key={i} technology={tech} />
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-1 text-xs md:text-sm rounded-md bg-[#1A1A1A] text-[#B0B0B0] border border-[#333333] font-medium flex items-center">
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
