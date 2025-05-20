export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "March 2024",
    url: "https://example.com/cert/aws-cloud"
  },
  {
    name: "Cloud Computing",
    issuer: "Microsoft Learn",
    date: "January 2024",
    url: "https://example.com/cert/cloud-computing"
  },
  {
    name: "Java Programming",
    issuer: "Udemy",
    date: "November 2023",
    url: "https://example.com/cert/java"
  },
  {
    name: "SQL for Data Analysis",
    issuer: "Coursera",
    date: "September 2023",
    url: "https://example.com/cert/sql-data"
  },
  {
    name: "Web Development Fundamentals",
    issuer: "freeCodeCamp",
    date: "July 2023",
    url: "https://example.com/cert/web-dev"
  },
  {
    name: "Introduction to Tableau",
    issuer: "DataCamp",
    date: "May 2023",
    url: "https://example.com/cert/tableau"
  }
];