import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/experiences", label: "Experiences" },
  { href: "/dining", label: "Dining" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  // Always solid on non-home pages, or if scrolled
  const isSolid = !isHome || isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isSolid
          ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50">
          <div className="flex flex-col items-start cursor-pointer group">
            <span
              className={cn(
                "text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
                isSolid ? "text-primary" : "text-white"
              )}
            >
              The Sarai at Toria
            </span>
            <span
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                isSolid ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Luxury Eco Lodge
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent cursor-pointer relative group py-2",
                  isSolid ? "text-foreground" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button
              variant={isSolid ? "default" : "secondary"}
              className={cn(
                "ml-4 font-serif italic rounded-none px-8",
                !isSolid && "bg-white text-primary hover:bg-white/90"
              )}
            >
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "hover:bg-transparent",
                  isSolid ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border w-[300px] p-0">
              <div className="flex flex-col h-full pt-20 px-8">
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        className={cn(
                          "text-xl font-serif cursor-pointer transition-colors hover:text-accent",
                          location === link.href ? "text-accent" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button className="mt-8 w-full font-serif italic text-lg py-6">
                      Book Your Stay
                    </Button>
                  </Link>
                </nav>

                <div className="mt-auto mb-10 text-muted-foreground text-sm space-y-2">
                  <p>Toria, District Chhatarpur</p>
                  <p>Madhya Pradesh, 471101, India</p>
                  <p className="pt-4">+91 123 456 7890</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
