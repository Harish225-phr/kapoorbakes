import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star, Clock, Award, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-bakery.jpg';
import bakeryItemsImage from '@/assets/bakery-items.jpg';

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Baked fresh every morning with the finest ingredients"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in traditional baking methods"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every item crafted with passion and care by our expert bakers"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "The best bakery in Delhi! Their croissants are absolutely divine."
    },
    {
      name: "Raj Kumar",
      rating: 5,
      comment: "Fresh bread every day and amazing customer service. Highly recommended!"
    },
    {
      name: "Anita Singh",
      rating: 5,
      comment: "Their cakes are perfect for special occasions. Always fresh and delicious!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="bg-gradient-primary bg-clip-text text-transparent">Kapoor Bakers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Fresh. Handmade. Irresistible.
          </p>
          <Link to="/menu">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white px-8 py-4 text-lg hover:shadow-strong transition-all duration-300 hover:scale-105 animate-scale-in"
            >
              Explore Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Why Choose Kapoor Bakers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Experience the difference of authentic, artisanal baking with every bite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover-lift shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border-0 bg-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 hover-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Signature Collection
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From buttery croissants to artisanal sourdough, each item in our collection 
                represents our commitment to quality and tradition. Discover flavors that 
                have been perfected over generations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're looking for your daily bread, a special treat, or something 
                for a celebration, we have something to satisfy every craving.
              </p>
              <Link to="/menu">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  View Full Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src={bakeryItemsImage} 
                alt="Featured Bakery Items" 
                className="w-full h-96 object-cover rounded-lg shadow-medium hover:shadow-strong transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border-0 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-foreground">
                  - {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-slide-up">
            Visit us today or place an order for pickup. Fresh baked goods await you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/visit">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Visit Our Store
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
