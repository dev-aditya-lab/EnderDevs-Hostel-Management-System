import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a  href="#" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>

        {/* Contact Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Support</h3>
          <p className="text-gray-400">support@hostelmanage.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025 Hostel Management System. All Rights Reserved.
      </div>
    </footer>
  );
}
