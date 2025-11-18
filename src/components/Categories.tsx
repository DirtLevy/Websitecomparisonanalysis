import { Card, CardContent } from "./ui/card";
import { Sparkles, Droplet, Shirt, Scissors, Trash2, Coffee, Building2, Wrench } from "lucide-react";

export function Categories() {
  const categories = [
    {
      name: "Cleaning Chemicals",
      icon: Droplet,
      count: "850+ products",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Janitorial Equipment",
      icon: Wrench,
      count: "420+ products",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Hygiene Products",
      icon: Sparkles,
      count: "680+ products",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Waste Management",
      icon: Trash2,
      count: "320+ products",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Textile Care",
      icon: Shirt,
      count: "290+ products",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Paper Products",
      icon: Scissors,
      count: "540+ products",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Kitchen Supplies",
      icon: Coffee,
      count: "380+ products",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Facility Care",
      icon: Building2,
      count: "470+ products",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from our extensive selection of professional 
            cleaning and facility management products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-600"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
