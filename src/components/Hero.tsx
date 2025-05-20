import React, { useState, useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Bubbles from './ui/Bubbles';
import TypingEffect from './ui/TypingEffect';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 pt-24">
      {/* Background bubbles */}
      <Bubbles />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Profile picture */}
          <div className="relative mx-auto w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-tertiary shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img 
              src="public/images/Ashok.jpg" 
              alt="Nandyala Ashok Kumar Reddy" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-primary text-4xl md:text-5xl font-bold font-heading mb-2">
            Nandyala Ashok Kumar Reddy
          </h1>

          {/* Typing effect */}
          <div className="h-8 my-4">
            <TypingEffect 
              phrases={[
                "Frontend Developer", 
                "Web Developer", 
                "React.js Enthusiast", 
                "Data Analyst"
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={3000}
            />
          </div>

          {/* Brief intro */}
          <p className="text-dark text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Recent IT graduate passionate about building beautiful, high-performance web applications using React.js and modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a 
              href="#contact" 
              className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="bg-white hover:bg-tertiary text-primary border border-primary px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Ashokreddy2105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ashok-kumar-reddy-639598238/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:nandyalaashok2105@gmail.com"
              className="text-dark hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+91 9063002462" 
              className="text-dark hover:text-primary transition-colors duration-300"
              aria-label="Portfolio"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#537D5D" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;