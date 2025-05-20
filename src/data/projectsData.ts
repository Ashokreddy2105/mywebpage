export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SimpleInsu - Insurance Comparison App",
    description: "A responsive insurance comparison application with search and filtering features. Users can compare different insurance plans based on price, coverage, and benefits.",
    image: "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    liveUrl: "https://example.com/simpleinsu",
    githubUrl: "https://github.com/username/simpleinsu"
  },
  {
    title: "Weather App - Real-Time Monitoring",
    description: "Real-time weather monitoring application with dynamic visualizations. Includes current conditions, forecasts, and historical data with responsive design.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    technologies: ["React.js", "REST API", "JavaScript", "Chart.js"],
    liveUrl: "https://example.com/weather-app",
    githubUrl: "https://github.com/username/weather-app"
  },
  {
    title: "CommunionHub - Event Management",
    description: "A community event management platform featuring event creation, RSVPs, and dynamic filtering. Built with a mobile-first approach and integrated with calendar APIs.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Firebase"],
    liveUrl: "https://example.com/communionhub",
    githubUrl: "https://github.com/username/communionhub"
  },
  {
    title: "Sales Dashboard - Tableau + SQL",
    description: "Interactive sales analytics dashboard built with Tableau and SQL. Features KPI monitoring, trend analysis, and regional performance visualization.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    technologies: ["Tableau", "SQL", "Data Visualization", "MySQL"],
    githubUrl: "https://github.com/username/sales-dashboard"
  },
  {
    title: "Student Performance Analysis",
    description: "Data analysis project examining student performance trends and identifying factors affecting academic outcomes using Python and visualization libraries.",
    image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Cleaning"],
    githubUrl: "https://github.com/username/student-performance"
  },
  {
    title: "Soft Skills Challenge Game",
    description: "Interactive puzzle-based game designed to evaluate and improve professional soft skills. Features real-time feedback and skill development tracking.",
    image: "https://images.pexels.com/photos/7947303/pexels-photo-7947303.jpeg",
    technologies: ["React.js", "JavaScript", "Game Design", "UI/UX"],
    liveUrl: "https://example.com/soft-skills-game",
    githubUrl: "https://github.com/username/soft-skills-game"
  }
];