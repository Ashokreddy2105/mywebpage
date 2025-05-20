import React, { useState, useEffect } from 'react';
import SectionTitle from './ui/SectionTitle';
import SkillCard from './ui/SkillCard';
import { skillsData, SkillCategory } from '../data/skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [filteredSkills, setFilteredSkills] = useState(skillsData);
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

    const section = document.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skillsData);
    } else {
      setFilteredSkills(skillsData.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'tools', label: 'Tools' },
    { id: 'concepts', label: 'Concepts' }
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary hover:bg-tertiary hover:bg-opacity-50'
              }`}
              onClick={() => setActiveCategory(category.id as SkillCategory | 'all')}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {filteredSkills.map((skill, index) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;