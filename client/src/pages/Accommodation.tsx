import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CottageCard } from "@/components/CottageCard";
import { useCottages } from "@/hooks/use-content";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  { src: "/images/our room 2.jpg", alt: "Sarai at Toria cottage at night" },
  { src: "/images/our room 3.jpg", alt: "Mezzanine cottage exterior with grasslands" },
  { src: "/images/our room 4.jpg", alt: "Classic cottage mud walls and gardens" },
  { src: "/images/Our room 1.jpg", alt: "Sarai at Toria cottage exterior night view" },
];

export default function Accommodation() {
  const { data: cottages, isLoading } = useCottages();
  const [heroIndex, setHeroIndex] = useState(0);
  const [zoomDir, setZoomDir] = useState<"in" | "out">("in");

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setZoomDir((prev) => (prev === "in" ? "out" : "in"));
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i: number) => {
    setZoomDir("in");
    setHeroIndex(i);
  };
  const prev = () => goTo((heroIndex - 1 + heroImages.length) % heroImages.length);
  const next = () => goTo((heroIndex + 1) % heroImages.length);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Carousel */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Carousel images with zoom effect */}
        <AnimatePresence mode="sync">
          <motion.div
            key={heroIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.img
              src={heroImages[heroIndex].src}
              alt={heroImages[heroIndex].alt}
              className="w-full h-full object-cover"
              initial={{ scale: zoomDir === "in" ? 1.12 : 0.95 }}
              animate={{ scale: zoomDir === "in" ? 1.0 : 1.08 }}
              transition={{ duration: 5.5, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />

        {/* Text content */}
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Cottages
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elegant mud cottages that breathe with the earth, offering serene luxury amidst nature.
          </motion.p>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white rounded-full w-11 h-11 flex items-center justify-center transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white rounded-full w-11 h-11 flex items-center justify-center transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all rounded-full ${i === heroIndex ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <section className="section-padding container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our eight independent cottages are situated on a small hillock overlooking the Ken River.
                Designed by architect Eugene Pandala, they are constructed using earth bags and locally sourced natural materials.
                The thick mud walls keep the interiors cool in summer and warm in winter, eliminating the need for AC.
              </p>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-10">
                {cottages?.map((cottage, i) => (
                  <CottageCard key={cottage.id} cottage={cottage} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-muted/30 container-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Comforts" title="Room Amenities" centered />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "En-suite Bathrooms", "Private Veranda", "24h Hot Water", "Solar Power",
              "Eco-friendly Toiletries", "Tea/Coffee Maker", "Writing Desk", "River/Garden View"
            ].map((amenity, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium text-foreground">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
