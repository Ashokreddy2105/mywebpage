import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import ExperienceCard from './ui/ExperienceCard';
import { experiences } from '../data/experienceData';

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        
        <div ref={timelineRef} className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-tertiary"></div>
          
          {/* Experience cards */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index}
                experience={experience}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;