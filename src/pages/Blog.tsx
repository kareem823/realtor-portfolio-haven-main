
import React from 'react';
import Layout from '../components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ChevronRight, Tag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog post data structure
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to First-Time Home Buying in 2024",
    excerpt: "Navigate the challenges of purchasing your first home with our comprehensive guide covering everything from financing to closing.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Buying",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 2,
    title: "5 Home Staging Tips to Maximize Your Property's Value",
    excerpt: "Learn how professional staging techniques can help you sell your home faster and for a higher price in today's competitive market.",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Selling",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    title: "California Real Estate Market Trends to Watch in 2024",
    excerpt: "Our market analysts break down the latest trends, predictions, and opportunities in California's dynamic real estate landscape.",
    date: "February 25, 2024",
    readTime: "10 min read",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1574871786514-46e1680ea587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "Jennifer Chen",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  },
  {
    id: 4,
    title: "Luxury Home Design Trends for 2024",
    excerpt: "Discover the latest architectural and interior design innovations that are transforming luxury real estate across California.",
    date: "February 18, 2024",
    readTime: "7 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "David Park",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  },
  {
    id: 5,
    title: "Investment Properties: Commercial vs. Residential in Today's Economy",
    excerpt: "Compare the pros and cons of different investment strategies and find out which property types offer the best returns in 2024.",
    date: "February 10, 2024",
    readTime: "9 min read",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1560518883-f5be2dc1dbf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "Alexandra Miller",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    }
  },
  {
    id: 6,
    title: "How Sustainable Features Are Increasing Home Values",
    excerpt: "Explore how eco-friendly home improvements can boost your property's marketability and appeal to environmentally conscious buyers.",
    date: "January 30, 2024",
    readTime: "6 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    author: {
      name: "Thomas Greene",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg"
    }
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="py-12 md:py-20">
        {/* Header */}
        <div className="container-tight mb-12 md:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Haven Real Estate Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest trends, expert advice, and insider tips on the California real estate market.
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="container-tight mb-16">
          <div className="bg-realtor-50 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-full relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <Badge variant="outline" className="mb-4 bg-white w-fit">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={blogPosts[0].author.avatar} 
                      alt={blogPosts[0].author.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{blogPosts[0].author.name}</span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    <Button>
                      Read Article <ChevronRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="flex-none">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-realtor-50">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart size={14} />
                      <span className="text-xs">{Math.floor(Math.random() * 50) + 10}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0 flex-none">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-medium">{post.author.name}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-realtor-100 rounded-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest real estate insights, market updates, and expert advice delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="rounded-md border px-4 py-2 flex-grow"
                  />
                  <Button className="whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1366&q=80" 
                  alt="Newsletter" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
