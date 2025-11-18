import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    products: [
      "Cleaning Chemicals",
      "Janitorial Equipment",
      "Hygiene Products",
      "Waste Management",
      "Paper Products",
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Partners",
      "Sustainability",
    ],
    support: [
      "Contact",
      "FAQ",
      "Delivery Info",
      "Returns",
      "Terms & Conditions",
    ],
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-900">
                CP
              </div>
              <div>
                <div className="font-bold text-xl">CleanPro</div>
                <div className="text-sm text-blue-200">Professional Solutions</div>
              </div>
            </div>
            <p className="text-blue-100 mb-4 max-w-sm">
              Your trusted partner for professional cleaning supplies and 
              janitorial equipment since 2008. Serving businesses across Hungary 
              with quality products and exceptional service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">
              © 2024 CleanPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Legal Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
