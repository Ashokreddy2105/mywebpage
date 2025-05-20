import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-semibold mb-4">Nandyala Ashok Kumar Reddy</h3>
            <p className="text-neutral-200 mb-4 max-w-md">
              Frontend Developer and IT graduate passionate about creating impactful web experiences
              with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Ashokreddy2105" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-tertiary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ashok-kumar-reddy-639598238/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-tertiary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:nandyalaashok2105@gmail.com"
                className="text-neutral-200 hover:text-tertiary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+91 9063002462"
                className="text-neutral-200 hover:text-tertiary transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-200 hover:text-tertiary transition-colors duration-300 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="text-tertiary mr-2">▹</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-1 text-tertiary" />
                <a 
                  href="mailto:nandyalaashok2105@gmail.com"
                  className="text-neutral-200 hover:text-tertiary transition-colors duration-300"
                >
                  nandyalaashok2105@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 text-tertiary" />
                <a 
                  href="tel:+919063002462"
                  className="text-neutral-200 hover:text-tertiary transition-colors duration-300"
                >
                  +91-9063002462
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-tertiary border-opacity-30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-300 text-sm">
            &copy; {new Date().getFullYear()} Nandyala Ashok Kumar Reddy. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-tertiary text-primary p-2 rounded-full hover:bg-opacity-80 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="transform transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;