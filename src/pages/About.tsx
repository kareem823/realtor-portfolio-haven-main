import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Building, Gem, Trophy, Users, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
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

  const teamMembers = [
    {
      name: 'Alexandra Reynolds',
      position: 'Founder & Principal Broker',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'With over 15 years of experience in luxury real estate, Alexandra has cultivated an impressive network of clients and industry connections.'
    },
    {
      name: 'Jonathan Miller',
      position: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Jonathan specializes in high-end residential properties and has consistently ranked among the top 1% of agents nationwide.'
    },
    {
      name: 'Sophia Chen',
      position: 'Luxury Property Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      bio: 'Sophia brings her architectural background and keen eye for design to help clients find properties that align with their aesthetic preferences.'
    },
    {
      name: 'Michael Torres',
      position: 'Investment Property Advisor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: "Michael's expertise in market analysis and investment strategy has helped numerous clients build successful real estate portfolios."
    }
  ];

  const values = [
    {
      icon: <Gem className="h-8 w-8 text-realtor-800" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from property marketing to client communication.'
    },
    {
      icon: <Heart className="h-8 w-8 text-realtor-800" />,
      title: 'Integrity',
      description: 'Our business is built on trust, transparency, and ethical practices in all client relationships.'
    },
    {
      icon: <Users className="h-8 w-8 text-realtor-800" />,
      title: 'Client-Focused',
      description: 'Your goals and needs are at the center of everything we do. We listen, understand, and deliver.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-realtor-800" />,
      title: 'Results-Driven',
      description: "We're committed to achieving exceptional results that exceed our clients' expectations."
    }
  ];

  const achievements = [
    "Over $1 billion in total sales volume",
    "Named Top Luxury Brokerage by Real Estate Excellence Awards",
    "Average days on market: 45% below industry average",
    "Ranked in the Top 1% of agents nationwide",
    "Featured in Architectural Digest, Forbes, and WSJ",
    "100+ luxury properties sold in the last year"
  ];

  return (
    <Layout>
      <section className="pt-28 md:pt-40 pb-20 md:pb-32 bg-realtor-100 relative overflow-hidden">
        <div className="container-tight">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <Badge className="mb-4 text-sm bg-realtor-200 text-realtor-800 hover:bg-realtor-200 py-1.5 px-3 rounded-md">
              About Haven Realty
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 reveal-on-scroll">
              Elevating the <span className="font-medium">Real Estate</span> Experience
            </h1>
            <p className="text-xl text-muted-foreground reveal-on-scroll">
              We combine industry expertise, personalized service, and innovative marketing to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden elegant-shadow reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Luxury home exterior" 
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden elegant-shadow reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Luxury home interior" 
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <Badge className="mb-4 text-sm bg-realtor-200 text-realtor-800 hover:bg-realtor-200 py-1.5 px-3 rounded-md reveal-on-scroll">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-6 reveal-on-scroll">A Legacy of Excellence in Luxury Real Estate</h2>
              <div className="space-y-4 text-muted-foreground reveal-on-scroll">
                <p>
                  Founded in 2005, Haven Realty began with a simple yet powerful vision: to transform the real estate experience for discerning clients seeking exceptional properties and service.
                </p>
                <p>
                  What started as a boutique agency with a handful of passionate agents has evolved into one of the most respected names in luxury real estate, while maintaining the personalized approach that defined our beginnings.
                </p>
                <p>
                  Our founder, Alexandra Reynolds, built Haven Realty on the principles of excellence, integrity, and unwavering commitment to client satisfaction—values that continue to drive every aspect of our business today.
                </p>
              </div>
              <div className="mt-8 reveal-on-scroll">
                <Link to="/contact">
                  <Button className="group">
                    Connect With Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden elegant-shadow reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1517898717281-8e4385a41802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Founder" 
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-realtor-100">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 text-sm bg-white text-realtor-800 hover:bg-white py-1.5 px-3 rounded-md reveal-on-scroll">
              Our Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6 reveal-on-scroll">The Principles That Guide Us</h2>
            <p className="text-muted-foreground text-lg reveal-on-scroll">
              At Haven Realty, our values shape our approach and define the experience we deliver to each client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 elegant-shadow bg-white h-full reveal-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 p-4 bg-realtor-200 inline-block rounded-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 text-sm bg-realtor-200 text-realtor-800 hover:bg-realtor-200 py-1.5 px-3 rounded-md reveal-on-scroll">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6 reveal-on-scroll">Meet Our Expert Agents</h2>
            <p className="text-muted-foreground text-lg reveal-on-scroll">
              A team of dedicated professionals with deep industry knowledge and a passion for real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group hover-lift reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-xl overflow-hidden mb-5 elegant-shadow aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover transition-transform duration-500 ease-elegant group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-realtor-500 mb-3">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-realtor-900 text-white">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 text-sm bg-white/10 text-white hover:bg-white/20 py-1.5 px-3 rounded-md reveal-on-scroll">
              Our Achievements
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6 text-white reveal-on-scroll">Proven Results</h2>
            <p className="text-white/80 text-lg reveal-on-scroll">
              Our track record speaks for itself with outstanding results and industry recognition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 border border-white/10 rounded-xl reveal-on-scroll bg-white/5 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mr-4 p-2 bg-white/10 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-white/90 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto bg-realtor-100 p-10 md:p-16 rounded-2xl elegant-shadow text-center reveal-on-scroll">
            <Badge className="mb-4 text-sm bg-white text-realtor-800 hover:bg-white py-1.5 px-3 rounded-md">
              Work With Us
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or invest, our team is ready to provide the expertise and personalized service you deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/portfolio">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
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

export default About;
