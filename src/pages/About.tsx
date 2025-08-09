import { Card } from '@/components/ui/card';
import { Heart, Award, Clock, Users } from 'lucide-react';
import bakeryTeamImage from '@/assets/bakery-team.jpg';
import bakeryBreadImage from '@/assets/bakery-bread.jpg';

const About = () => {
  const whyUsFeatures = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every item is crafted with passion and care, using traditional techniques passed down through generations."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced from trusted suppliers to ensure exceptional taste and freshness."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Our products are baked fresh every morning, ensuring you get the best quality and taste with every bite."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "A family-owned bakery with over 25 years of experience in bringing joy through delicious baked goods."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            About Kapoor Bakers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Discover the story behind our passion for baking and what makes us special
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Discover what makes Kapoor Bakers the preferred choice for fresh, delicious baked goods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-lift shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border-0 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
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

      {/* Our Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kapoor Bakers began as a small family venture in 1998, with a simple dream: to bring 
                the authentic taste of freshly baked goods to our community. What started in a modest 
                kitchen has now grown into a beloved local bakery.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've maintained our commitment to traditional baking methods while 
                embracing innovation. Our recipes have been perfected over generations, ensuring 
                every bite delivers the perfect balance of flavor and texture.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to serve thousands of satisfied customers who trust us for their 
                daily bread, special occasions, and everything in between. Our journey continues with 
                the same passion and dedication that started it all.
              </p>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src={bakeryTeamImage} 
                alt="Kapoor Bakers Team" 
                className="w-full h-96 object-cover rounded-lg shadow-medium hover:shadow-strong transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in lg:order-1">
              <img 
                src={bakeryBreadImage} 
                alt="Artisanal Bread Making" 
                className="w-full h-96 object-cover rounded-lg shadow-medium hover:shadow-strong transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            <div className="animate-slide-up lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Craftsmanship
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Kapoor Bakers, every product is a testament to our commitment to excellence. 
                Our skilled bakers begin their work before dawn, ensuring that fresh bread and 
                pastries are ready when you arrive.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in the power of traditional techniques combined with premium ingredients. 
                From hand-kneaded dough to slow-rise processes, we take the time needed to create 
                products that exceed expectations.
              </p>
              <p className="text-lg text-muted-foreground">
                Our dedication to quality means we never compromise on freshness, taste, or presentation. 
                Each item that leaves our bakery represents our promise to deliver nothing but the best.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;