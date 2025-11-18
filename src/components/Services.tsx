import { Card, CardContent } from "./ui/card";
import { Truck, HeadphonesIcon, CreditCard, Award, Clock, ShieldCheck } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Free shipping on orders over 50,000 Ft across Hungary",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our expert team is always ready to help you",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options including invoicing for businesses",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "All products meet strict quality standards",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Orders processed within 24 hours on business days",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: ShieldCheck,
      title: "Certified Products",
      description: "Professional-grade products with full certification",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Why Choose CleanPro</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions backed by excellent service and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-blue-600 transition-all group">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
