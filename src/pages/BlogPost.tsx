
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, Clock, Share2, Bookmark, Heart, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';

// Blog post data structure (same as in Blog.tsx)
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

// Sample blog posts data (simplified version of what's in Blog.tsx)
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
  }
];

// Sample blog post content
const sampleContent = `
<p class="text-lg mb-6">Buying your first home is a significant milestone, but it can also be overwhelming. This comprehensive guide breaks down the process into manageable steps to help you navigate the journey with confidence.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Assess Your Financial Readiness</h2>

<p class="mb-4">Before you start house hunting, take a close look at your finances. Consider these key factors:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Credit score:</strong> Most lenders require a score of at least 620 for conventional loans, though FHA loans may accept lower scores.</li>
  <li><strong>Debt-to-income ratio:</strong> Your monthly debt payments should ideally be less than 36% of your gross monthly income.</li>
  <li><strong>Down payment:</strong> While 20% is traditional, many first-time buyer programs allow for much lower down payments.</li>
  <li><strong>Emergency fund:</strong> Ensure you have savings beyond your down payment for unexpected expenses.</li>
</ul>

<div class="bg-realtor-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-semibold mb-3">Pro Tip</h3>
  <p>Get pre-approved for a mortgage before you start house hunting. This gives you a clear budget and shows sellers you're a serious buyer.</p>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Understand Mortgage Options</h2>

<p class="mb-4">There are several mortgage types available to first-time buyers:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Conventional loans:</strong> These typically require higher credit scores but offer good interest rates.</li>
  <li><strong>FHA loans:</strong> Backed by the Federal Housing Administration, these accept lower down payments and credit scores.</li>
  <li><strong>VA loans:</strong> If you're a veteran or active military, these offer excellent terms with no down payment required.</li>
  <li><strong>USDA loans:</strong> For rural home buyers, these government-backed loans can offer zero down payment options.</li>
</ul>

<div class="my-8">
  <img src="https://images.unsplash.com/photo-1560518883-f5be2dc1dbf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Mortgage documents" class="w-full h-80 object-cover rounded-lg" />
  <p class="text-sm text-muted-foreground mt-2 text-center">Understanding mortgage options is crucial for first-time buyers</p>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4">3. Determine Your Must-Haves</h2>

<p class="mb-4">Create two lists: "must-haves" and "nice-to-haves." Consider:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Location and neighborhood</li>
  <li>Home size and layout</li>
  <li>Number of bedrooms and bathrooms</li>
  <li>Outdoor space</li>
  <li>School district quality</li>
  <li>Commute times</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">4. Work With Professionals</h2>

<p class="mb-6">A skilled real estate agent and experienced mortgage lender can make all the difference. They'll guide you through the process, help you avoid pitfalls, and negotiate on your behalf.</p>

<div class="bg-realtor-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-semibold mb-3">First-Time Buyer Programs</h3>
  <p>Ask your lender about special programs for first-time buyers. Many states offer down payment assistance, reduced interest rates, or tax credits.</p>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4">5. Navigate the Closing Process</h2>

<p class="mb-4">Once your offer is accepted, you'll enter the closing phase:</p>

<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Complete a home inspection</li>
  <li>Review the title search</li>
  <li>Secure homeowner's insurance</li>
  <li>Complete the final walkthrough</li>
  <li>Sign closing documents</li>
</ul>

<p class="text-lg mt-8">Remember, buying a home is a journey. Take your time, ask questions, and lean on your real estate professionals. With proper preparation, you'll be ready to make one of the most significant investments of your life with confidence.</p>
`;

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching post data
    const fetchPost = () => {
      setLoading(true);
      const postId = parseInt(id || '1');
      const foundPost = blogPosts.find(p => p.id === postId);
      
      // Simulate network delay
      setTimeout(() => {
        setPost(foundPost || blogPosts[0]);
        setLoading(false);
      }, 300);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container-tight py-16">
          <div className="h-8 w-1/3 bg-slate-200 animate-pulse rounded mb-4"></div>
          <div className="h-12 w-3/4 bg-slate-200 animate-pulse rounded mb-8"></div>
          <div className="h-80 bg-slate-200 animate-pulse rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-slate-200 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-slate-200 animate-pulse rounded"></div>
            <div className="h-4 w-2/3 bg-slate-200 animate-pulse rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container-tight py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">We couldn't find the article you're looking for.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft size={16} className="mr-2" /> Return to Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12">
        <div className="container-tight mb-8">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
        </div>

        {/* Blog Post Header */}
        <div className="container-tight">
          <Badge variant="outline" className="mb-4 bg-realtor-50">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">Real Estate Expert</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <CalendarDays size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-96 md:h-[500px] mb-10 relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="container-tight grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: sampleContent }}></article>
            
            {/* Tags */}
            <div className="mt-10 pt-6 border-t flex flex-wrap gap-2">
              <div className="flex items-center mr-2">
                <Tag size={16} className="mr-2" /> Tags:
              </div>
              <Badge variant="outline" className="bg-realtor-50">Real Estate</Badge>
              <Badge variant="outline" className="bg-realtor-50">First Time Buyers</Badge>
              <Badge variant="outline" className="bg-realtor-50">Mortgage</Badge>
              <Badge variant="outline" className="bg-realtor-50">Home Buying</Badge>
            </div>
            
            {/* Share and Save */}
            <div className="mt-6 pt-6 border-t flex flex-wrap justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="font-medium">Share:</span>
                <button title="Share on Facebook" className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <Facebook size={18} />
                </button>
                <button title="Share on Twitter" className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors">
                  <Twitter size={18} />
                </button>
                <button title="Share on LinkedIn" className="p-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                  <Linkedin size={18} />
                </button>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Bookmark size={16} /> Save for Later
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 size={16} /> Share
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Author Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="font-bold text-lg">{post.author.name}</h3>
                    <p className="text-sm text-muted-foreground">Real Estate Expert</p>
                  </div>
                  <p className="text-sm mb-4">
                    Sarah has over 10 years of experience in California real estate, specializing in first-time home buyers and luxury properties.
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Related Posts */}
              <div>
                <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(relatedPost => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                      <div className="flex gap-3 group">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium group-hover:text-realtor-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center mt-1">
                            <CalendarDays size={14} className="text-muted-foreground mr-1" />
                            <span className="text-xs text-muted-foreground">{relatedPost.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-realtor-50 py-1 px-3">Buying</Badge>
                  <Badge variant="outline" className="bg-realtor-50 py-1 px-3">Selling</Badge>
                  <Badge variant="outline" className="bg-realtor-50 py-1 px-3">Market Analysis</Badge>
                  <Badge variant="outline" className="bg-realtor-50 py-1 px-3">Investment</Badge>
                  <Badge variant="outline" className="bg-realtor-50 py-1 px-3">Design</Badge>
                  <Badge variant="outline" className="bg-realtor-50 py-1 px-3">Luxury</Badge>
                </div>
              </div>
              
              {/* Newsletter */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest real estate insights and updates.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
