export interface Experience {
  position: string;
  company: string;
  logo: string;
  duration: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    position: "Web Operations Intern",
    company: "Nixby Media Pvt Ltd",
    logo: "🌐",
    duration: "Dec 2024 – Feb 2025",
    achievements: [
      "Managed 200+ job listings on WordPress with 100% data accuracy",
      "Increased organic traffic by 25% to 350,000+ page views through SEO optimization",
      "Built a PHP-MySQL based CRUD system for managing the Project section",
      "Created performance reports and dashboards to analyze user engagement",
      "Collaborated with cross-functional teams to improve website performance"
    ]
  },
  {
    position: "Web Developer Intern",
    company: "Bharat Intern",
    logo: "💻",
    duration: "June 2023 – Aug 2023",
    achievements: [
      "Developed responsive e-commerce site using React.js, HTML, CSS, JS",
      "Applied test-driven development and frontend optimization techniques",
      "Worked with UI/UX team to enhance usability and performance",
      "Implemented secure payment processing functionality",
      "Created interactive product filtering and search features"
    ]
  }
];