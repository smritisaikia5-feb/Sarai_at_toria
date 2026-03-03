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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isSolid
          ? "bg-[#F8F8F6] py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo + Branding */}
        <Link href="/" className="z-50">
          <div className="flex flex-row items-center gap-3 cursor-pointer group">
            {/* Logo image — visible on all pages except home when not scrolled */}
            <img
              src="/images/logo.png"
              alt="The Sarai at Toria Logo"
              className={cn(
                "h-14 w-14 object-contain transition-all duration-500",
                isHome && !isScrolled
                  ? "opacity-0 w-0 h-0 overflow-hidden pointer-events-none"
                  : "opacity-100"
              )}
            />
            {/* Branding text */}
            <div className="flex flex-col items-start">
              <span
                className={cn(
                  "text-xl sm:text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
                  isSolid ? "text-[#4F735B]" : "text-white"
                )}
              >
                The Sarai at Toria
              </span>
              <span
                className={cn(
                  "text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                  isSolid ? "text-gray-500" : "text-white/80"
                )}
              >
                Luxury Eco Lodge
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-[15px] font-medium transition-colors cursor-pointer py-1 border-b-2",
                    isSolid
                      ? isActive
                        ? "text-[#ce7e4a] border-[#ce7e4a]"
                        : "text-[#404040] hover:text-[#ce7e4a] border-transparent"
                      : isActive
                        ? "text-white border-white"
                        : "text-white/90 hover:text-white border-transparent"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            )
          })}
          <Link href="/contact">
            <Button
              className={cn(
                "ml-4 font-serif italic rounded-none px-8 py-2 h-auto text-[16px]",
                isSolid
                  ? "bg-[#486b59] text-white hover:bg-[#344d40]"
                  : "bg-white text-[#486b59] hover:bg-white/90"
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
            <SheetContent side="right" className="bg-[#F8F8F6] border-l-border w-[300px] p-0">
              <div className="flex flex-col h-full pt-20 px-8">
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => {
                    const isActive = location === link.href;
                    return (
                      <Link key={link.href} href={link.href}>
                        <span
                          className={cn(
                            "text-xl font-serif cursor-pointer transition-colors border-b-2 inline-block pb-1",
                            isActive ? "text-[#ce7e4a] border-[#ce7e4a]" : "text-foreground border-transparent hover:text-[#ce7e4a]"
                          )}
                        >
                          {link.label}
                        </span>
                      </Link>
                    )
                  })}
                  <Link href="/contact">
                    <Button className="mt-8 w-full bg-[#486b59] text-white hover:bg-[#344d40] font-serif italic text-lg py-6 rounded-none">
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
