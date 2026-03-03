import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <img src="/images/logo.png" alt="The Sarai at Toria Logo" className="h-20 w-auto mb-4 object-contain" />
              <h3 className="text-2xl font-serif font-bold">The Sarai at Toria</h3>
              <p className="text-sm text-primary-foreground/70 uppercase tracking-widest mt-1">Luxury Eco Lodge</p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xs">
              A riverside sanctuary blending luxury with sustainability. Experience the wild heart of India in harmony with nature.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/saraiattoria/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/saraiattoria#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Accommodation", href: "/accommodation" },
                { label: "Experiences", href: "/experiences" },
                { label: "Dining", href: "/dining" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <span>
                  Village Toria, P.O. Madla<br />
                  District Chhatarpur, 471101<br />
                  Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>+91 987 654 3210</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>reservations@saraiattoria.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy">
                  <span className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer block">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <span className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer block">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy">
                  <span className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer block">
                    Cancellation Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-center items-center text-sm text-primary-foreground/50 text-center">
          <p>© {new Date().getFullYear()} The Sarai at Toria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
