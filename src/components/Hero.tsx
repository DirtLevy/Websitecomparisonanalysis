import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, ShieldCheck, Truck, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full">
              Professional Cleaning Solutions
            </div>
            <h1 className="text-blue-900">
              Premium Quality Cleaning Products for Every Need
            </h1>
            <p className="text-gray-700 text-lg">
              Discover our comprehensive range of professional cleaning supplies, 
              janitorial equipment, and hygiene products. Trusted by businesses 
              across Hungary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Request Quote
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">Quality Guaranteed</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm text-gray-600">15+ Years</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ4NzEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional cleaning supplies"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-blue-600 text-3xl">5000+</div>
                <div className="text-gray-600">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}