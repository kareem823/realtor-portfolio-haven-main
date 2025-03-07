
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-realtor-100 border-t border-border pt-16 pb-8">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-medium">HAVEN<span className="text-realtor-500">.</span></h2>
            </Link>
            <p className="text-muted-foreground mb-6">
              Elevating real estate experiences with exceptional service and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-realtor-600 hover:text-realtor-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-realtor-600 hover:text-realtor-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="text-realtor-600 hover:text-realtor-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-base font-medium mb-4">Properties</h3>
            <ul className="space-y-3">
              {['For Sale', 'Sold Properties', 'Luxury Homes', 'New Listings', 'Open Houses'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/portfolio"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-realtor-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Luxury Avenue, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-realtor-500 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  (310) 555-1234
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-realtor-500 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  contact@realtorportfolio.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Haven Realty. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
