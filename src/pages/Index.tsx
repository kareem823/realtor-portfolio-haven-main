
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Award, Heart, Users, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const Index = () => {
  const featuredPropertiesRef = useRef<HTMLDivElement>(null);
  
  // Create animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      address: 'Malibu, CA',
      price: '$8,250,000',
      bedrooms: 5,
      bathrooms: 6,
      sqft: 4800,
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 2,
      title: 'Modern Downtown Penthouse',
      address: 'Los Angeles, CA',
      price: '$4,750,000',
      bedrooms: 3,
      bathrooms: 3.5,
      sqft: 3200,
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 3,
      title: 'Mediterranean Estate',
      address: 'Beverly Hills, CA',
      price: '$12,900,000',
      bedrooms: 7,
      bathrooms: 8,
      sqft: 9500,
      img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  const services = [
    {
      icon: <Home className="h-6 w-6 text-realtor-800" />,
      title: 'Residential Sales',
      description: 'Expert assistance buying or selling your primary residence or investment property.'
    },
    {
      icon: <Award className="h-6 w-6 text-realtor-800" />,
      title: 'Luxury Properties',
      description: 'Access to exclusive high-end properties and discreet transactions.'
    },
    {
      icon: <Users className="h-6 w-6 text-realtor-800" />,
      title: 'Client-Centered Approach',
      description: 'Personalized service tailored to your unique real estate needs and goals.'
    }
  ];

  const testimonials = [
    {
      quote: "Working with Haven Realty was a truly exceptional experience. Their attention to detail and market knowledge helped us secure our dream home.",
      author: "Sarah & Michael Johnson",
      position: "Homebuyers"
    },
    {
      quote: "I've sold multiple properties with Haven and have always been impressed with their professionalism and ability to close deals quickly.",
      author: "David Chen",
      position: "Property Investor"
    },
    {
      quote: "Their marketing strategy for our luxury property generated multiple offers within the first week. Couldn't be happier with the results.",
      author: "Elizabeth Taylor",
      position: "Home Seller"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container-tight relative z-10 py-20 md:py-0">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight tracking-tighter">
              Discover Your Perfect <span className="font-semibold">Luxury Home</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Exceptional properties and white-glove service for the most discerning clients
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-realtor-900 hover:bg-white/90 rounded-md"
                onClick={() => featuredPropertiesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Properties
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-md">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section ref={featuredPropertiesRef} className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl mb-3 reveal-on-scroll">Featured Properties</h2>
              <p className="text-muted-foreground text-lg reveal-on-scroll">
                Discover our carefully curated selection of exceptional properties
              </p>
            </div>
            <Link to="/portfolio" className="mt-6 md:mt-0 group flex items-center text-realtor-800 font-medium reveal-on-scroll">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="property-card elegant-shadow rounded-lg overflow-hidden reveal-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img 
                    src={property.img} 
                    alt={property.title} 
                    className="h-64 w-full object-cover transition-transform duration-700 ease-elegant"
                  />
                  <div className="property-overlay absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Link to={`/portfolio/${property.id}`}>
                      <Button className="bg-white/90 hover:bg-white text-realtor-900 font-medium">
                        View Details
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-9 w-9 rounded-full bg-white/80 hover:bg-white text-realtor-500 hover:text-realtor-900"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-realtor-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{property.title}</h3>
                  <p className="text-realtor-900 font-semibold mb-4 flex items-center">
                    <DollarSign className="h-4 w-4" />
                    {property.price}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sqft.toLocaleString()} Sq.Ft.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-realtor-100">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 reveal-on-scroll">Our Services</h2>
            <p className="text-muted-foreground text-lg reveal-on-scroll">
              Comprehensive real estate services tailored to meet your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 elegant-shadow hover-lift reveal-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className="mb-5 p-3 bg-realtor-200 inline-block rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        ></div>
        
        <div className="container-tight relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 reveal-on-scroll">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg reveal-on-scroll">
              Don't just take our word for it — hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white border elegant-shadow reveal-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 text-4xl font-serif text-realtor-300">"</div>
                  <p className="text-foreground italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-realtor-900 text-white">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-6 reveal-on-scroll">Ready to Find Your Dream Home?</h2>
            <p className="text-white/80 text-xl mb-8 reveal-on-scroll">
              Whether you're buying, selling, or investing, our team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 reveal-on-scroll">
              <Link to="/portfolio">
                <Button size="lg" className="bg-white text-realtor-900 hover:bg-white/90 w-full sm:w-auto">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
