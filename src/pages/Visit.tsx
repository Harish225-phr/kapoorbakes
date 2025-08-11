import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Car, Train, Bus } from 'lucide-react';

const Visit = () => {
  const storeDetails = {
    name: "Kapoor Bakers",
    address: "388 Krishna Near Kamani Chowk ITI Workshop Road Opp Sai Honda Showroom 135001",
    city: "Yamuna Nagar, Haryana",
    phone: "+918295348595",
    hours: [
      { day: "Monday - Friday", time: "7:00 AM - 10:00 PM" },
      { day: "Saturday - Sunday", time: "7:00 AM - 10:00 PM" }
    ]
  };

  const directions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available. Take Ring Road and exit at Connaught Place."
    },
    {
      icon: Train,
      title: "By Metro",
      description: "Rajiv Chowk Metro Station (Blue & Yellow Line) - 2 minutes walk."
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Multiple bus routes stop at Connaught Place. Routes: 101, 102, 103."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Visit Our Store
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Come and experience the aroma of fresh baked goods. We're located in the heart of Delhi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Information */}
            <div className="space-y-8 animate-fade-in">
              {/* Address Card */}
              <Card className="p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 border-0 bg-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Our Location
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {storeDetails.address}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {storeDetails.city}
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://maps.app.goo.gl/m7RhujC7SkyrqcG38', '_blank')}
                >
                  Get Directions
                </Button>
              </Card>

              {/* Hours Card */}
              <Card className="p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 border-0 bg-card animate-slide-up">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Store Hours
                    </h2>
                    <div className="space-y-3">
                      {storeDetails.hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-semibold text-foreground">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Phone Card */}
              <Card className="p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 border-0 bg-card animate-scale-in">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Call Us
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      Have questions? Give us a call!
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(`tel:${storeDetails.phone}`, '_self')}
                >
                  {storeDetails.phone}
                </Button>
              </Card>
            </div>

            {/* Map */}
            <div className="animate-slide-up">
              <Card className="h-96 lg:h-full shadow-medium hover:shadow-strong transition-shadow duration-300 overflow-hidden border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13802.20197215029!2d77.25270220176581!3d30.13567356756385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef97625cf69c5%3A0xaef05f6cbe1c3afc!2sKapoor%20Confectionery%20and%20Bakers!5e0!3m2!1sen!2sin!4v1754930251257!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kapoor Bakers Location"
                  className="w-full h-full"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              How to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Multiple convenient ways to visit our bakery in the heart of Delhi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-lift hover-tilt shadow-soft hover:shadow-strong transition-all duration-500 animate-bounce-in border-0 bg-card group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-glow animate-float group-hover:animate-pulse-slow">
                  <direction.icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {direction.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {direction.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
            Can't Visit Today?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
            Place an order for pickup or ask about our delivery options in Haryana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              className="bg-gradient-primary hover:shadow-medium transition-all duration-300 hover:scale-105"
              onClick={() => window.open(`tel:${storeDetails.phone}`, '_self')}
            >
              Call for Pickup
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/918295348595?text=Hi! I would like to inquire about delivery options.', '_blank')}
            >
              WhatsApp for Delivery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;