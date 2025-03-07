
import React, { useState } from 'react';
import { X, Upload, Trash, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { propertyImages } from '@/data/properties';

interface PropertyImageGalleryProps {
  propertyId: number;
  isAdmin?: boolean;
}

const PropertyImageGallery = ({ propertyId, isAdmin = false }: PropertyImageGalleryProps) => {
  const { toast } = useToast();
  const [galleryImages, setGalleryImages] = useState<string[]>(
    propertyImages[propertyId] || []
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = () => {
    // Simulate image upload
    setIsUploading(true);
    setTimeout(() => {
      const newImageUrl = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
      setGalleryImages([...galleryImages, newImageUrl]);
      setIsUploading(false);
      
      toast({
        title: "Image uploaded",
        description: "Property image has been successfully added to the gallery.",
      });
    }, 1500);
  };

  const handleImageDelete = (imageUrl: string) => {
    setGalleryImages(galleryImages.filter(img => img !== imageUrl));
    setSelectedImage(null);
    
    toast({
      title: "Image removed",
      description: "Property image has been removed from the gallery.",
    });
  };

  if (galleryImages.length === 0 && !isAdmin) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        {isAdmin && (
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Images
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Gallery Image</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div 
                  className="border-2 border-dashed border-slate-200 rounded-lg h-48 flex flex-col items-center justify-center cursor-pointer hover:border-slate-300 transition-colors"
                  onClick={handleImageUpload}
                >
                  <Upload className="h-10 w-10 text-slate-400 mb-2" />
                  <p className="text-muted-foreground text-sm">Click to upload an image</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP up to 5MB</p>
                </div>
                {isUploading && (
                  <div className="mt-4 flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-realtor-500 mr-2"></div>
                    <span className="text-sm">Uploading image...</span>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {galleryImages.length === 0 ? (
        <div className="text-center py-10 border border-dashed rounded-lg">
          <p className="text-muted-foreground">No gallery images available</p>
          {isAdmin && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-2"
              onClick={handleImageUpload}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add First Image
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative group">
              <Dialog>
                <DialogTrigger asChild>
                  <div 
                    className="aspect-square rounded-md overflow-hidden cursor-pointer elegant-shadow" 
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <div className="relative">
                    <img 
                      src={selectedImage || img} 
                      alt="Large preview" 
                      className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                    />
                    {isAdmin && (
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-2 right-2"
                        onClick={() => handleImageDelete(selectedImage || img)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
              
              {isAdmin && (
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleImageDelete(img)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyImageGallery;
