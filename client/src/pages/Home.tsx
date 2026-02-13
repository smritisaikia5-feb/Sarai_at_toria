import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CottageCard } from "@/components/CottageCard";
import { InquiryForm } from "@/components/InquiryForm";
import { useCottages, useTestimonials } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { data: cottages, isLoading: cottagesLoading } = useCottages();
  const { data: testimonials } = useTestimonials();

  // Show only 2 cottages on home
  const featuredCottages = cottages?.slice(0, 2) || [];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: 'luxury safari lodge india river' */}
          <img 
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3432&auto=format&fit=crop" 
            alt="The Sarai at Toria Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6 block"
          >
            By the Riverside, In the Wild
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            The Sarai at Toria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            A luxurious eco-retreat bridging the historic temples of Khajuraho and the wildlife of Panna Tiger Reserve.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/accommodation">
              <Button size="lg" className="rounded-none bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-serif italic">
                Explore Our Cottages
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowRight className="rotate-90 w-6 h-6" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-padding container-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Unsplash image: 'safari couple sitting' or 'nature resort interior' */}
             <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1544967919-623f95e8697b?q=80&w=2670&auto=format&fit=crop" 
                 alt="Relaxing at Sarai" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-accent/20 rounded-lg -z-0 hidden md:block" />
          </div>
          <div>
            <SectionHeader 
              subtitle="Welcome" 
              title="A Sanctuary for the Soul" 
              centered={false}
              description="Nestled on the banks of the Ken River, The Sarai at Toria offers a unique experience of rural India. Founded by conservationist Raghu Chundawat and wildlife photographer Joanna van Gruisen, our retreat is designed to be an integral part of the landscape."
            />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Here, sustainability isn't just a buzzword—it's our way of life. From earth-walled cottages to solar power and locally sourced cuisine, every detail connects you to the earth while wrapping you in understated luxury.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-12">
                Read Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cottages */}
      <section className="section-padding bg-muted/50 container-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            subtitle="Accommodation" 
            title="Earth-Walled Luxury" 
            description="Our independent cottages are crafted from mud and thatch, designed to catch the breeze and blend seamlessly with the surroundings."
          />
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {cottagesLoading ? (
              // Loading skeletons
              [1, 2].map((i) => (
                <div key={i} className="h-[500px] bg-gray-200 animate-pulse rounded-lg" />
              ))
            ) : (
              featuredCottages.map((cottage, i) => (
                <CottageCard key={cottage.id} cottage={cottage} index={i} />
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/accommodation">
              <Button variant="link" className="text-primary text-lg font-serif italic hover:text-accent">
                View All Accommodation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Highlights - Parallax-ish */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Unsplash: 'tiger safari india' */}
          <img 
            src="https://images.unsplash.com/photo-1505553877995-1f92e850b297?q=80&w=2692&auto=format&fit=crop" 
            alt="Tiger Safari" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-white">
          <SectionHeader 
            subtitle="Experiences" 
            title="Adventures in the Wild" 
            description="From tiger safaris in Panna National Park to sunset boat rides on the pristine Ken River, discover the secrets of Madhya Pradesh."
            light
            className="mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Tiger Safari", desc: "Explore Panna Tiger Reserve with expert naturalists.", icon: "🐾" },
              { title: "River Boat Ride", desc: "Drift along the Ken River spotting birds and crocodiles.", icon: "🛶" },
              { title: "Khajuraho Temples", desc: "Visit the UNESCO World Heritage erotic temples nearby.", icon: "🏛️" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/experiences">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 border-none">
                Discover More Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding bg-secondary/30 container-padding" id="booking">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            subtitle="Contact Us" 
            title="Begin Your Journey" 
            description="Ready to experience the untamed beauty of Panna? Send us an inquiry and we will curate your perfect stay."
          />
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
