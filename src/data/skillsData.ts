export type SkillCategory = 'programming' | 'frameworks' | 'tools' | 'concepts';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: number; // 1-5
  levelLabel: string;
}

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: 'JavaScript',
    icon: '⚡',
    category: 'programming',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'TypeScript',
    icon: '📘',
    category: 'programming',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'HTML5',
    icon: '🌐',
    category: 'programming',
    level: 5,
    levelLabel: 'Expert',
  },
  {
    name: 'CSS3',
    icon: '🎨',
    category: 'programming',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'Java',
    icon: '☕',
    category: 'programming',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'Python',
    icon: '🐍',
    category: 'programming',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'SQL',
    icon: '🗄️',
    category: 'programming',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'PHP',
    icon: '🐘',
    category: 'programming',
    level: 2,
    levelLabel: 'Basic',
  },
  
  // Frameworks & Libraries
  {
    name: 'React.js',
    icon: '⚛️',
    category: 'frameworks',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    category: 'frameworks',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'Express.js',
    icon: '🚂',
    category: 'frameworks',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'RESTful APIs',
    icon: '🔄',
    category: 'frameworks',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'Bootstrap',
    icon: '🅱️',
    category: 'frameworks',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'Tailwind CSS',
    icon: '🌊',
    category: 'frameworks',
    level: 3,
    levelLabel: 'Intermediate',
  },
  
  // Tools & Platforms
  {
    name: 'Git',
    icon: '📂',
    category: 'tools',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'GitHub',
    icon: '🐙',
    category: 'tools',
    level: 4,
    levelLabel: 'Advanced',
  },
  {
    name: 'MySQL',
    icon: '🐬',
    category: 'tools',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'AWS',
    icon: '☁️',
    category: 'tools',
    level: 2,
    levelLabel: 'Basic',
  },
  {
    name: 'WordPress',
    icon: '📰',
    category: 'tools',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'Tableau',
    icon: '📊',
    category: 'tools',
    level: 3,
    levelLabel: 'Intermediate',
  },
  
  // Concepts
  {
    name: 'DSA',
    icon: '🧩',
    category: 'concepts',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'DBMS',
    icon: '💾',
    category: 'concepts',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'OS',
    icon: '💻',
    category: 'concepts',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'Agile',
    icon: '🔄',
    category: 'concepts',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'Testing',
    icon: '🧪',
    category: 'concepts',
    level: 3,
    levelLabel: 'Intermediate',
  },
  {
    name: 'UI/UX',
    icon: '🎯',
    category: 'concepts',
    level: 3,
    levelLabel: 'Intermediate',
  },
];