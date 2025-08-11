import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
             <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
          >
            Kapoor Bakers
          </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Kapoor Bakers. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                to="/menu" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Menu
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
              <Link 
                to="/visit" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Visit Us
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/kapoorbakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/kapoorbakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/kapoorbakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/kapoorbakers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;