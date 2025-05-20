import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Certification } from '../../data/certificationsData';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full border border-tertiary border-opacity-30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="flex items-start">
        <div className="bg-tertiary bg-opacity-20 p-2 rounded-full mr-4">
          <Award size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-primary mb-1">
            {certification.name}
          </h3>
          <p className="text-neutral-700 text-sm mb-3">
            {certification.issuer}
          </p>
          <div className="flex items-center text-neutral-500 text-sm mb-4">
            <Calendar size={14} className="mr-1" />
            <span>{certification.date}</span>
          </div>
          {certification.url && (
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-secondary hover:text-primary transition-colors"
            >
              <span className="mr-1">Verify</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;