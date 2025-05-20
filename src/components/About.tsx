import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div 
          ref={aboutRef} 
          className="grid md:grid-cols-2 gap-8 mt-12 opacity-0 max-w-6xl mx-auto"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-primary">Career Objective</h3>
            <p className="text-lg leading-relaxed">
              Recent IT graduate seeking a Frontend Engineer or Junior Engineer role to leverage skills 
              in React.js, JavaScript, Java, and web development. Passionate about building high-performance, 
              responsive applications using modern frameworks, and contributing in agile environments to deliver 
              impactful user experiences and business value.
            </p>
            <div className="bg-tertiary bg-opacity-20 rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-primary mb-3">Education</h4>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  🎓
                </div>
                <div>
                  <h5 className="font-medium">B.E. in Information Technology</h5>
                  <p className="text-neutral-600">Anil Neerukonda Institute of Technology and Science (ANITS)</p>
                  <p className="text-sm text-neutral-500">Dec 2020 – May 2024 | GPA: 7.69/10.0</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary p-0.5 rounded-lg shadow-md transform transition-transform hover:scale-[1.01] duration-300">
              <div className="bg-white p-6 rounded-lg h-full">
                <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                  <span className="text-2xl mr-2">💻</span> Technical Expertise
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Frontend development with React.js and modern JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Building responsive, accessible web applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Data analysis and visualization techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Backend integration with RESTful APIs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-tertiary to-background p-0.5 rounded-lg shadow-md transform transition-transform hover:scale-[1.01] duration-300">
              <div className="bg-white p-6 rounded-lg h-full">
                <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                  <span className="text-2xl mr-2">🚀</span> Internship Highlights
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Managed 200+ job listings with 100% data accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Increased organic traffic by 25% through SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▹</span>
                    <span>Developed responsive e-commerce site using React.js</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;