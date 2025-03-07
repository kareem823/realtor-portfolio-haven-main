
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Bed, 
  Bath, 
  Square, 
  Tag, 
  Heart, 
  ArrowDownUp,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Layout from '@/components/layout/Layout';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [priceFilter, setPriceFilter] = useState('all');

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

  const properties = [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      address: 'Malibu, CA',
      price: 8250000,
      bedrooms: 5,
      bathrooms: 6,
      sqft: 4800,
      status: 'for-sale',
      featured: true,
      date: '2023-08-15',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 2,
      title: 'Modern Downtown Penthouse',
      address: 'Los Angeles, CA',
      price: 4750000,
      bedrooms: 3,
      bathrooms: 3.5,
      sqft: 3200,
      status: 'for-sale',
      featured: true,
      date: '2023-07-22',
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 3,
      title: 'Mediterranean Estate',
      address: 'Beverly Hills, CA',
      price: 12900000,
      bedrooms: 7,
      bathrooms: 8,
      sqft: 9500,
      status: 'for-sale',
      featured: true,
      date: '2023-09-05',
      img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 4,
      title: 'Contemporary Hillside Home',
      address: 'Hollywood Hills, CA',
      price: 7850000,
      bedrooms: 4,
      bathrooms: 5,
      sqft: 4200,
      status: 'for-sale',
      featured: false,
      date: '2023-09-18',
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 5,
      title: 'Elegant Spanish Colonial',
      address: 'Santa Monica, CA',
      price: 6450000,
      bedrooms: 5,
      bathrooms: 5.5,
      sqft: 5100,
      status: 'sold',
      featured: false,
      date: '2023-06-10',
      img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 6,
      title: 'Mid-Century Modern Masterpiece',
      address: 'Palm Springs, CA',
      price: 3950000,
      bedrooms: 4,
      bathrooms: 4,
      sqft: 3800,
      status: 'sold',
      featured: false,
      date: '2023-05-20',
      img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 7,
      title: 'Waterfront Modern Estate',
      address: 'Newport Beach, CA',
      price: 14750000,
      bedrooms: 6,
      bathrooms: 7.5,
      sqft: 8200,
      status: 'for-sale',
      featured: false,
      date: '2023-08-30',
      img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 8,
      title: 'Luxury Ranch Estate',
      address: 'Montecito, CA',
      price: 19500000,
      bedrooms: 8,
      bathrooms: 10,
      sqft: 12000,
      status: 'sold',
      featured: true,
      date: '2023-04-15',
      img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  // Filter properties based on tab, search, and price range
  const filteredProperties = properties.filter(property => {
    // Filter by tab
    if (activeTab !== 'all' && property.status !== activeTab) {
      return false;
    }

    // Filter by search term
    if (searchTerm && !property.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !property.address.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Filter by price
    if (priceFilter === 'under-5m' && property.price >= 5000000) {
      return false;
    } else if (priceFilter === '5m-10m' && (property.price < 5000000 || property.price > 10000000)) {
      return false;
    } else if (priceFilter === 'over-10m' && property.price <= 10000000) {
      return false;
    }

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortOption === 'price-high') {
      return b.price - a.price;
    } else if (sortOption === 'price-low') {
      return a.price - b.price;
    }
    return 0;
  });

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-20 bg-realtor-100 relative overflow-hidden">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 text-sm bg-realtor-200 text-realtor-800 hover:bg-realtor-200 py-1.5 px-3 rounded-md reveal-on-scroll">
              Property Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-light mb-6 reveal-on-scroll">
              Discover Exceptional <span className="font-medium">Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 reveal-on-scroll">
              Explore our curated collection of distinctive homes and estates
            </p>
            <div className="max-w-xl mx-auto reveal-on-scroll">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search by location or property name..." 
                  className="pl-10 bg-white h-12 border-realtor-200 focus-visible:ring-realtor-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          {/* Filtering Options */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <Tabs 
              defaultValue="all" 
              className="w-full md:w-auto" 
              value={activeTab} 
              onValueChange={setActiveTab}
            >
              <TabsList className="bg-realtor-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-white">All Properties</TabsTrigger>
                <TabsTrigger value="for-sale" className="data-[state=active]:bg-white">For Sale</TabsTrigger>
                <TabsTrigger value="sold" className="data-[state=active]:bg-white">Sold</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex-1 sm:flex-none justify-between">
                    <div className="flex items-center">
                      <Tag className="mr-2 h-4 w-4" />
                      <span>Price: {priceFilter === 'all' ? 'All' : 
                          priceFilter === 'under-5m' ? 'Under $5M' : 
                          priceFilter === '5m-10m' ? '$5M - $10M' : 
                          'Over $10M'}
                      </span>
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setPriceFilter('all')}>All Prices</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceFilter('under-5m')}>Under $5M</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceFilter('5m-10m')}>$5M - $10M</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceFilter('over-10m')}>Over $10M</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex-1 sm:flex-none justify-between">
                    <div className="flex items-center">
                      <ArrowDownUp className="mr-2 h-4 w-4" />
                      <span>Sort: {sortOption === 'newest' ? 'Newest' : 
                          sortOption === 'oldest' ? 'Oldest' : 
                          sortOption === 'price-high' ? 'Price: High to Low' : 
                          'Price: Low to High'}
                      </span>
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setSortOption('newest')}>Newest</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption('oldest')}>Oldest</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption('price-high')}>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortOption('price-low')}>Price: Low to High</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Showing {sortedProperties.length} {sortedProperties.length === 1 ? 'property' : 'properties'}
          </p>

          {/* Properties Grid */}
          {sortedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProperties.map((property, index) => (
                <Card 
                  key={property.id} 
                  className="overflow-hidden border-0 elegant-shadow property-card reveal-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <img 
                      src={property.img} 
                      alt={property.title} 
                      className="h-64 w-full object-cover"
                    />
                    {property.status === 'sold' && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-realtor-800 text-white hover:bg-realtor-700">Sold</Badge>
                      </div>
                    )}
                    {property.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-realtor-500 text-white hover:bg-realtor-400">Featured</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-9 w-9 rounded-full bg-white/80 hover:bg-white text-realtor-500 hover:text-realtor-800"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="property-overlay absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Link to={`/property/${property.id}`}>
                        <Button className="bg-white/90 hover:bg-white text-realtor-900 font-medium">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-realtor-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.address}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{property.title}</h3>
                    <p className="text-realtor-900 font-semibold mb-4 flex items-center">
                      <DollarSign className="h-4 w-4" />
                      {formatPrice(property.price)}
                    </p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{property.sqft.toLocaleString()} Sq.Ft.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search criteria</p>
              <Button onClick={() => { setSearchTerm(''); setPriceFilter('all'); setActiveTab('all'); }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-realtor-100">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-2xl elegant-shadow text-center reveal-on-scroll">
            <Badge className="mb-4 text-sm bg-realtor-200 text-realtor-800 hover:bg-realtor-200 py-1.5 px-3 rounded-md">
              Find Your Dream Home
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6">Not seeing what you're looking for?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our team has access to exclusive off-market properties and can help you find the perfect home that meets your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Our Team
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
