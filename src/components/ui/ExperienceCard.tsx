import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Experience } from '../../data/experienceData';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isVisible: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`mb-8 flex flex-col md:flex-row items-center md:even:flex-row-reverse ${
        isVisible ? 'animate-slideUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-tertiary z-10"></div>
      
      {/* Card */}
      <div
        className={`relative bg-white rounded-lg shadow-md p-6 md:w-5/12 w-full 
          ${isEven ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'} 
          transform transition-all duration-300
          ${isExpanded ? 'scale-[1.02]' : 'scale-100'}`}
      >
        {/* Company logo placeholder */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mb-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
            {experience.logo}
          </div>
        </div>
        
        <div className="mt-6 md:mt-0">
          <h3 className="text-xl font-heading font-semibold text-primary">
            {experience.position}
          </h3>
          <h4 className="text-lg text-secondary font-medium">
            {experience.company}
          </h4>
          <p className="text-sm text-neutral-500 mb-3">
            {experience.duration}
          </p>
          
          {/* Core achievements - always visible */}
          <ul className="space-y-2 mb-3">
            {experience.achievements.slice(0, 2).map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="text-tertiary mr-2">▹</span>
                <span className="text-neutral-700">{achievement}</span>
              </li>
            ))}
          </ul>
          
          {/* Expandable achievements */}
          {experience.achievements.length > 2 && (
            <>
              <div
                className={`space-y-2 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {experience.achievements.slice(2).map((achievement, i) => (
                  <li key={i + 2} className="flex items-start list-none">
                    <span className="text-tertiary mr-2">▹</span>
                    <span className="text-neutral-700">{achievement}</span>
                  </li>
                ))}
              </div>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Show less" : "Show more"}
              >
                {isExpanded ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp size={16} className="ml-1" />
                  </>
                ) : (
                  <>
                    <span>Show more</span>
                    <ChevronDown size={16} className="ml-1" />
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;