"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("dashboard")) {
    return null; // Don't render footer on dashboard pages
  }

  return (
    <footer className="bg-primary py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Girls Shop</h3>
          <p className="text-sm">
            Your one-stop shop for trendy fashion and accessories. Stay stylish and confident with our exclusive collections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-4">
            Email: <a href="mailto:info@girlsshop.com" className="hover:underline">info@girlsshop.com</a>
          </p>
          <p className="text-sm mb-4">
            Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="hover:"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="hover:"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn" className="hover:"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Girls Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
