import React, { useRef, useEffect, useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';
import { projects } from '../data/projectsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);
    };

    // Initial check
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="mt-12 relative">
          {/* Left scroll arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md transition-opacity duration-300 ${
              showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>
          
          {/* Projects container with horizontal scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-4 hide-scrollbar snap-x snap-mandatory gap-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, index) => (
              <div key={index} className="snap-center min-w-[300px] md:min-w-[400px] w-80 md:w-96 flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {/* Right scroll arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md transition-opacity duration-300 ${
              showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;