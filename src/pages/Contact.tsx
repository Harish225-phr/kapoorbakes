import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@kapoorbakers.com",
      action: "mailto:hello@kapoorbakers.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Bakery Street, Delhi, India 110001",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Sun: 7:00 AM - 9:00 PM",
      action: null
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-slide-up hover-lift group cursor-pointer"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 hover-glow group-hover:animate-pulse-slow">
                      <info.icon className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-shine group-hover:scale-105 inline-block transform transition-transform duration-300"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="mt-12 p-6 bg-secondary/30 rounded-lg animate-bounce-in hover-lift group">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Why Contact Us?
                </h3>
                <ul className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <li className="hover:text-primary transition-colors duration-200">• Custom cake orders for special occasions</li>
                  <li className="hover:text-primary transition-colors duration-200">• Bulk orders for events and parties</li>
                  <li className="hover:text-primary transition-colors duration-200">• Special dietary requirements</li>
                  <li className="hover:text-primary transition-colors duration-200">• Catering services</li>
                  <li className="hover:text-primary transition-colors duration-200">• General inquiries and feedback</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-medium hover:shadow-strong transition-all duration-500 animate-slide-up border-0 bg-card group hover-tilt">
              <h2 className="text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="group-hover:text-primary transition-colors duration-300">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full hover:shadow-soft transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="group-hover:text-primary transition-colors duration-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full hover:shadow-soft transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="group-hover:text-primary transition-colors duration-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full hover:shadow-soft transition-all duration-300 focus:scale-[1.02]"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="group-hover:text-primary transition-colors duration-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-32 hover:shadow-soft transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-strong transition-all duration-500 hover:scale-105 btn-ripple hover-shine"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;