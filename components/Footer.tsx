import { Leaf, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#388E3C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-[#388E3C]" />
              </div>
              <div>
                <div className="font-bold text-xl">ALLEN+</div>
                <div className="text-sm text-green-100">Aid Life Learn Environment</div>
              </div>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Empowering communities through sustainable development, climate action, and humanitarian support in
              Eastern DRC and beyond.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-green-100">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">infosallenplus@gmail.com</span>
              </div>
              <div className="flex items-center text-green-100">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">DRC, North-Kivu, Goma, Circulaire 219</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/future-goals" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Future Goals
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:infosallenplus@gmail.com"
                  className="text-green-100 hover:text-[#FFC107] transition-colors"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <Link href="/programs" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-[#FFC107] transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} ALLEN+ - All Rights Reserved. Empowering communities for a sustainable
              future.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}