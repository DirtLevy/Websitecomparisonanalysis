import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Star } from "lucide-react";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Multi-Surface Cleaner Pro",
      category: "Cleaning Chemicals",
      price: "4,990",
      originalPrice: "6,490",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1642429948905-62fc9c9b3f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHByb2R1Y3RzJTIwYm90dGxlc3xlbnwxfHx8fDE3NjM0MDIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "SALE",
      badgeColor: "bg-red-600",
    },
    {
      id: 2,
      name: "Professional Mop System",
      category: "Janitorial Equipment",
      price: "12,990",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1759630814564-9dd241639270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW5pdG9yaWFsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzQ4NzEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "BESTSELLER",
      badgeColor: "bg-blue-600",
    },
    {
      id: 3,
      name: "Industrial Floor Cleaner",
      category: "Cleaning Chemicals",
      price: "8,490",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzYzNDg3MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NEW",
      badgeColor: "bg-green-600",
    },
    {
      id: 4,
      name: "Hygiene Starter Pack",
      category: "Hygiene Products",
      price: "15,990",
      originalPrice: "19,990",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ4NzEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "SALE",
      badgeColor: "bg-red-600",
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-blue-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Top-rated professional cleaning solutions trusted by industry experts
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all overflow-hidden">
              <div className="relative overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 right-4 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-900 text-2xl">{product.price} Ft</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">{product.originalPrice} Ft</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">View All Products</Button>
        </div>
      </div>
    </section>
  );
}