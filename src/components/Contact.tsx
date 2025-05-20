import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      // Simulate form submission
      setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-tertiary opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">Email</p>
                  <a 
                    href="mailto:nandyalaashok2105@gmail.com" 
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    nandyalaashok2105@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">Phone</p>
                  <a 
                    href="tel:+919063002462" 
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    +91-9063002462
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">Location</p>
                  <p className="text-neutral-700">Giddalur, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-medium text-primary mb-2">Response Time</h4>
              <p className="text-neutral-600">I'll get back to you within 24 hours!</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.name ? 'border-error' : 'border-neutral-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.email ? 'border-error' : 'border-neutral-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.message ? 'border-error' : 'border-neutral-300'
                  }`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="text-error text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                  formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {/* Success message */}
              {formStatus === 'success' && (
                <div className="mt-4 p-3 bg-success bg-opacity-20 text-success rounded-lg text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {/* Error message */}
              {formStatus === 'error' && (
                <div className="mt-4 p-3 bg-error bg-opacity-20 text-error rounded-lg text-center">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;