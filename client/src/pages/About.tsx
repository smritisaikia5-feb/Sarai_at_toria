import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Unsplash: 'couple hiking nature' or similar */}
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
            alt="About Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            A labor of love by conservationists Raghu Chundawat and Joanna van Gruisen.
          </p>
        </div>
      </div>

      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            subtitle="The Founders" 
            title="Passion for Conservation" 
            description="The Sarai at Toria is not just a hotel; it is a statement about how tourism can support conservation."
          />
          
          <div className="prose prose-lg text-muted-foreground mx-auto">
            <p>
              Dr. Raghu Chundawat is a conservation biologist who spent ten years researching tigers in Panna National Park. 
              Joanna van Gruisen is a wildlife photographer, writer, and conservationist. Together, they created Sarai at Toria 
              to demonstrate that tourism can be a force for good—providing local employment, supporting the tiger reserve, 
              and preserving the natural habitat.
            </p>
            <p className="mt-6">
              The land where the Sarai stands was once degraded farmland. Over the years, Raghu and Joanna have rewilded it, 
              planting indigenous trees and grasses. Today, it is a thriving micro-habitat that attracts birds, butterflies, 
              and small mammals, seamlessly blending with the surrounding wilderness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 container-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Sustainability" title="Responsible Luxury" centered />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Earth Architecture",
                desc: "Built using mud-bag construction techniques that minimize cement use and provide superior insulation."
              },
              {
                title: "Clean Energy",
                desc: "We rely heavily on solar power for electricity and hot water, reducing our carbon footprint."
              },
              {
                title: "Local Community",
                desc: "Over 90% of our staff comes from the local Toria village, ensuring tourism benefits reach the community."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded border border-border/50">
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
