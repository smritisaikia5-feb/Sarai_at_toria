import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CottageCard } from "@/components/CottageCard";
import { useCottages } from "@/hooks/use-content";
import { Loader2 } from "lucide-react";

export default function Accommodation() {
  const { data: cottages, isLoading } = useCottages();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Unsplash: 'cottage interior luxury' */}
          <img 
            src="https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?q=80&w=2670&auto=format&fit=crop" 
            alt="Accommodation Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Cottages</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Elegant mud cottages that breathe with the earth, offering serene luxury amidst nature.
          </p>
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
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border border-border/50">
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
