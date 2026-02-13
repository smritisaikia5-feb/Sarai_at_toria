import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Utensils, Coffee, Wine } from "lucide-react";

export default function Dining() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Unsplash: 'outdoor dining luxury' */}
          <img 
            src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2574&auto=format&fit=crop" 
            alt="Dining Header" 
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
            <Utensils className="w-12 h-12 mx-auto text-accent mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4">Local Flavors</h3>
            <p className="text-muted-foreground">
              Savor the distinct taste of Bundelkhand cuisine, cooked in earthen pots on wood fires for authentic smokiness.
            </p>
          </div>
          <div className="bg-white p-8 rounded shadow-sm border border-border/50 text-center">
            <Coffee className="w-12 h-12 mx-auto text-accent mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4">Breakfast by the River</h3>
            <p className="text-muted-foreground">
              Start your day with fresh fruits, homemade breads, and hot coffee while watching the river wake up.
            </p>
          </div>
          <div className="bg-white p-8 rounded shadow-sm border border-border/50 text-center">
            <Wine className="w-12 h-12 mx-auto text-accent mb-6" />
            <h3 className="text-xl font-serif font-bold mb-4">Candlelit Dinners</h3>
            <p className="text-muted-foreground">
              Enjoy intimate dinners under the vast canopy of stars, accompanied by the gentle sounds of the wild.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white container-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-4xl font-serif mb-6">The Baithak</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Our main dining and lounge area, 'The Baithak', is a soaring open pavilion overlooking the river. 
              It is the heart of the Sarai, a place to gather, share stories of the day's sightings, and enjoy communal meals.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative z-10">
             {/* Unsplash: 'open air pavilion' */}
             <img 
               src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop" 
               alt="The Baithak" 
               className="rounded shadow-2xl border-4 border-white/20"
             />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
