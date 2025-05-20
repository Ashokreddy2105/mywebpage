import React, { useRef, useEffect } from 'react';
import SectionTitle from './ui/SectionTitle';
import CertificationCard from './ui/CertificationCard';
import { certifications } from '../data/certificationsData';

const Certifications = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let scrollInterval = useRef<number | null>(null);

  useEffect(() => {
    const startAutoScroll = () => {
      if (scrollInterval.current) return;
      
      scrollInterval.current = window.setInterval(() => {
        if (!carouselRef.current) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // Reset to beginning if we're at the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise scroll by the width of one card + gap
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 3000);
    };
    
    const stopAutoScroll = () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    };
    
    // Start auto-scrolling
    startAutoScroll();
    
    // Pause on hover
    if (carouselRef.current) {
      carouselRef.current.addEventListener('mouseenter', stopAutoScroll);
      carouselRef.current.addEventListener('mouseleave', startAutoScroll);
    }
    
    // Cleanup
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('mouseenter', stopAutoScroll);
        carouselRef.current.removeEventListener('mouseleave', startAutoScroll);
      }
      stopAutoScroll();
    };
  }, []);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Certifications</SectionTitle>
        
        <div className="mt-12 pb-4">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto hide-scrollbar py-4 gap-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {certifications.map((certification, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[300px] flex-shrink-0">
                <CertificationCard certification={certification} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;