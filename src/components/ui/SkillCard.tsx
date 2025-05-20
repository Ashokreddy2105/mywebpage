import React from 'react';
import { Skill } from '../../data/skillsData';

interface SkillCardProps {
  skill: Skill;
  delay: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay, isVisible }) => {
  const levelToWidth = {
    1: '20%',
    2: '40%',
    3: '60%',
    4: '80%',
    5: '100%',
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center mb-3 text-3xl">
          {skill.icon}
        </div>
        <h3 className="text-primary font-medium mb-2">{skill.name}</h3>
        <div className="w-full bg-neutral-200 rounded-full h-2 mb-1">
          <div 
            className="bg-secondary rounded-full h-2 transition-all duration-1000"
            style={{ 
              width: levelToWidth[skill.level as keyof typeof levelToWidth], 
              transitionDelay: `${delay + 0.3}s` 
            }}
          />
        </div>
        <span className="text-xs text-neutral-500">{skill.levelLabel}</span>
      </div>
    </div>
  );
};

export default SkillCard;