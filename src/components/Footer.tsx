import { Link } from 'react-router-dom';

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
              className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Kapoor Bakers
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Kapoor Bakers. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;