import { ShoppingCart, Menu, Search, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  const [cartCount] = useState(3);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a href="tel:+36123456789" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+36 1 234 5678</span>
              </a>
              <a href="mailto:info@cleanpro.hu" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@cleanpro.hu</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Free delivery over 50,000 Ft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              CP
            </div>
            <div>
              <div className="font-bold text-xl text-blue-900">CleanPro</div>
              <div className="text-xs text-gray-600">Professional Solutions</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="pr-10"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full rounded-l-none"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative hidden md:flex">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="mb-4"
                    />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
