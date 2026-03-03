import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ChefHat, Sprout, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function Dining() {
  const diningImages = [
    "/images/Dining 1.jpg",
    "/images/Dining 2.jpg",
    "/images/dining 3.jpg",
    "/images/Dining 4.jpg",
    "/images/Dining 5.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % diningImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [diningImages.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop"
            alt="Dining Header"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Dining at Sarai</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Farm-to-table cuisine enjoyed under the starlit skies or in our elegant Baithak.
          </p>
        </div>
      </div>

      <section className="section-padding container-padding">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            subtitle="Philosophy"
            title="A Taste of the Land"
            description="We believe that food should tell a story. Our menu features traditional recipes from Madhya Pradesh alongside continental favorites, prepared using fresh, organic produce from our own gardens or sourced from local farmers."
          />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded shadow-sm border border-border/50 text-center">
            <ChefHat className="w-12 h-12 mx-auto text-accent mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-wider text-sm">Inhouse Bakery</h3>
            <p className="text-muted-foreground">
              Enjoy freshly baked breads and pastries prepared every morning in our very own bakery.
            </p>
          </div>
          <div className="bg-white p-8 rounded shadow-sm border border-border/50 text-center">
            <Sprout className="w-12 h-12 mx-auto text-accent mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-wider text-sm">Home-Grown & Organic</h3>
            <p className="text-muted-foreground">
              Our ingredients are sourced directly from our organic gardens and local farmers for maximum freshness.
            </p>
          </div>
          <div className="bg-white p-8 rounded shadow-sm border border-border/50 text-center">
            <Globe className="w-12 h-12 mx-auto text-accent mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-wider text-sm">World Cuisine</h3>
            <p className="text-muted-foreground">
              Experience a diverse menu featuring international favorites alongside our celebrated local specialties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white container-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-4xl font-serif mb-6">Food Odyssey</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              The sarai takes it pride in the quality of its cooking. Fresh home-mode dishes originating from Raghu and Joanna's favourite recipies : dishes with the delicate spices from Indian cuisine , interspersed with garden salads and continental fare . By popular demand we now organize cooking demonstrations on request .
            </p>
          </div>
          <div className="w-full md:w-1/2 relative z-10 group mt-8 md:mt-0">
            <div className="relative aspect-[4/3] rounded shadow-2xl border-4 border-white/20 overflow-hidden box-border bg-black/10">
              {diningImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Dining Experience ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}

              {/* Prev/Next buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev - 1 + diningImages.length) % diningImages.length); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xl font-bold"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev + 1) % diningImages.length); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xl font-bold"
                aria-label="Next image"
              >
                &#8250;
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {diningImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
