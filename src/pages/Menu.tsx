import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Artisan Sourdough Bread",
      description: "Traditional sourdough with a perfect crust and soft interior, fermented for 24 hours",
      price: "₹180",
      category: "Bread",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      description: "Buttery, flaky pastry filled with rich Belgian dark chocolate",
      price: "₹85",
      category: "Pastry",
      image: "https://images.unsplash.com/photo-1555507036-ab794f4d8c29?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Red Velvet Cupcake",
      description: "Moist red velvet cake topped with cream cheese frosting and decorative swirls",
      price: "₹120",
      category: "Cupcake",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Blueberry Muffin",
      description: "Fresh blueberries baked into our signature vanilla muffin batter",
      price: "₹95",
      category: "Muffin",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Danish Apple Turnover",
      description: "Flaky puff pastry filled with cinnamon-spiced apple compote",
      price: "₹110",
      category: "Pastry",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "Chocolate Eclair",
      description: "Classic choux pastry filled with vanilla cream and topped with chocolate glaze",
      price: "₹130",
      category: "Pastry",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 7,
      name: "Whole Wheat Dinner Rolls",
      description: "Soft and fluffy dinner rolls made with organic whole wheat flour",
      price: "₹60",
      category: "Bread",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 8,
      name: "Strawberry Tart",
      description: "Buttery tart shell filled with vanilla custard and topped with fresh strawberries",
      price: "₹155",
      category: "Tart",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 9,
      name: "Cinnamon Roll",
      description: "Soft, sweet roll swirled with cinnamon and topped with cream cheese glaze",
      price: "₹100",
      category: "Pastry",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 10,
      name: "Macaron Box (6 pieces)",
      description: "Assorted French macarons in vanilla, chocolate, strawberry, and pistachio flavors",
      price: "₹350",
      category: "Macaron",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040e95?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Discover our delicious selection of freshly baked goods, made with love and the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover-lift shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border-0 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
            We also take custom orders for special occasions. Contact us to discuss your requirements!
          </p>
          <a 
            href="tel:+919876543210"
            className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;