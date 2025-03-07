
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { 
  MapPin, 
  DollarSign, 
  Bed, 
  Bath, 
  Square,
  ArrowLeft,
  Edit,
  X
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/layout/Layout';
import PropertyImageGallery from '@/components/property/PropertyImageGallery';
import { properties, propertyImages } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: '',
    address: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    description: ''
  });

  useEffect(() => {
    // Simulate fetching property data
    const propertyId = parseInt(id || '0');
    const foundProperty = properties.find(p => p.id === propertyId);
    
    if (foundProperty) {
      setProperty({
        ...foundProperty,
        // Add description field if it doesn't exist in the data
        description: foundProperty.description || 'This stunning property offers luxurious living in a prime location. Featuring elegant architecture and high-end finishes throughout, this home exemplifies sophisticated design and comfort. The expansive living areas open seamlessly to outdoor entertainment spaces, perfect for enjoying the scenic surroundings and entertaining guests.'
      });
      setEditFormData({
        title: foundProperty.title,
        address: foundProperty.address,
        price: foundProperty.price,
        bedrooms: foundProperty.bedrooms,
        bathrooms: foundProperty.bathrooms,
        sqft: foundProperty.sqft,
        description: foundProperty.description || 'This stunning property offers luxurious living in a prime location. Featuring elegant architecture and high-end finishes throughout, this home exemplifies sophisticated design and comfort. The expansive living areas open seamlessly to outdoor entertainment spaces, perfect for enjoying the scenic surroundings and entertaining guests.'
      });
    }
    
    setLoading(false);
  }, [id]);

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setEditFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'bedrooms' || name === 'bathrooms' || name === 'sqft'
        ? Number(value)
        : value
    }));
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update property state with form data
    setProperty(prev => ({
      ...prev,
      ...editFormData
    }));
    
    // Close edit mode
    setIsEditing(false);
    
    toast({
      title: "Property updated",
      description: "Property details have been successfully updated.",
    });
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-tight py-20">
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-realtor-500 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading property details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <div className="container-tight py-20">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/portfolio">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Properties
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-16 lg:pt-20 pb-16">
        {/* Property Navigation */}
        <div className="container-tight mb-8">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/portfolio" className="text-muted-foreground hover:text-foreground">Properties</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="font-medium truncate">{property.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-tight">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column: Images & Details */}
            <div className="lg:w-7/12">
              {/* Primary Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden elegant-shadow aspect-[4/3]">
                <img 
                  src={property.img} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
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
              </div>

              {/* Image Gallery */}
              <PropertyImageGallery propertyId={property.id} isAdmin={true} />

              {/* Property Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <div className="prose max-w-none">
                  <p>{property.description}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Property Information */}
            <div className="lg:w-5/12">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-xl border border-slate-200 elegant-shadow mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center text-realtor-500 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.address}</span>
                      </div>
                      <h1 className="text-2xl lg:text-3xl font-semibold mb-2">{property.title}</h1>
                      <p className="text-realtor-900 text-xl font-semibold flex items-center">
                        <DollarSign className="h-5 w-5" />
                        {formatPrice(property.price)}
                      </p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => setIsEditing(true)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[525px]">
                        <DialogHeader>
                          <DialogTitle>Edit Property Details</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleEditSubmit} className="space-y-4 mt-4">
                          <div>
                            <label htmlFor="title" className="block text-sm font-medium mb-1">Property Title</label>
                            <Input 
                              id="title" 
                              name="title" 
                              value={editFormData.title} 
                              onChange={handleEditFormChange} 
                              required 
                            />
                          </div>
                          <div>
                            <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                            <Input 
                              id="address" 
                              name="address" 
                              value={editFormData.address} 
                              onChange={handleEditFormChange} 
                              required 
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="price" className="block text-sm font-medium mb-1">Price ($)</label>
                              <Input 
                                id="price" 
                                name="price" 
                                type="number" 
                                value={editFormData.price} 
                                onChange={handleEditFormChange} 
                                required 
                              />
                            </div>
                            <div>
                              <label htmlFor="sqft" className="block text-sm font-medium mb-1">Square Footage</label>
                              <Input 
                                id="sqft" 
                                name="sqft" 
                                type="number" 
                                value={editFormData.sqft} 
                                onChange={handleEditFormChange} 
                                required 
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="bedrooms" className="block text-sm font-medium mb-1">Bedrooms</label>
                              <Input 
                                id="bedrooms" 
                                name="bedrooms" 
                                type="number" 
                                step="1" 
                                value={editFormData.bedrooms} 
                                onChange={handleEditFormChange} 
                                required 
                              />
                            </div>
                            <div>
                              <label htmlFor="bathrooms" className="block text-sm font-medium mb-1">Bathrooms</label>
                              <Input 
                                id="bathrooms" 
                                name="bathrooms" 
                                type="number" 
                                step="0.5" 
                                value={editFormData.bathrooms} 
                                onChange={handleEditFormChange} 
                                required 
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                            <Textarea 
                              id="description" 
                              name="description" 
                              value={editFormData.description} 
                              onChange={handleEditFormChange} 
                              rows={5} 
                              required 
                            />
                          </div>
                          <div className="flex justify-end space-x-2 pt-2">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </Button>
                            <Button type="submit">Save Changes</Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="flex justify-between text-sm border-y border-slate-200 py-4 my-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1 text-realtor-500" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1 text-realtor-500" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1 text-realtor-500" />
                      <span>{property.sqft.toLocaleString()} Sq.Ft.</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <Button className="w-full">Schedule a Viewing</Button>
                    <Button variant="outline" className="w-full">Contact Agent</Button>
                  </div>
                </div>

                {/* Agent Information */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 elegant-shadow">
                  <h3 className="text-lg font-semibold mb-4">Property Agent</h3>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                        alt="Agent" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Alexandra Reynolds</h4>
                      <p className="text-sm text-muted-foreground">Lead Luxury Agent</p>
                      <p className="text-sm text-realtor-500 mt-1">310-555-1234</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <Button variant="outline" className="w-full">
                      Message Agent
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="container-tight mt-20">
          <h2 className="text-2xl font-semibold mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.filter(p => p.id !== property.id).slice(0, 3).map((similarProperty) => (
              <Link to={`/property/${similarProperty.id}`} key={similarProperty.id} className="group">
                <div className="overflow-hidden rounded-lg elegant-shadow">
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={similarProperty.img} 
                      alt={similarProperty.title} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-elegant group-hover:scale-105"
                    />
                    {similarProperty.status === 'sold' && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-realtor-800 text-white hover:bg-realtor-700">Sold</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2 truncate">{similarProperty.title}</h3>
                    <p className="text-realtor-900 font-semibold mb-2">
                      {formatPrice(similarProperty.price)}
                    </p>
                    <div className="flex text-sm text-muted-foreground justify-between">
                      <span>{similarProperty.bedrooms} beds</span>
                      <span>{similarProperty.bathrooms} baths</span>
                      <span>{similarProperty.sqft.toLocaleString()} sq.ft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
