import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Project } from '../../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className={`absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:bg-tertiary transition-colors duration-200"
                aria-label="View Live"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary p-2 rounded-full hover:bg-tertiary transition-colors duration-200"
                aria-label="View Code on GitHub"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project info */}
      <div className="p-5">
        <h3 className="text-xl font-heading font-semibold text-primary mb-2">{project.title}</h3>
        
        <p className="text-neutral-600 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-tertiary bg-opacity-20 text-primary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;