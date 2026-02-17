import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CottageCard } from "@/components/CottageCard";
import { InquiryForm } from "@/components/InquiryForm";
import { useCottages, useTestimonials } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote, X } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png"
];

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showContentOverVideo, setShowContentOverVideo] = useState(false);
  const { data: cottages, isLoading: cottagesLoading } = useCottages();
  const { data: testimonials } = useTestimonials();

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel timer - change image every 5 seconds when video is not playing
  useEffect(() => {
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying]);

  // Show content after 7 seconds when video starts playing (after welcome message)
  useEffect(() => {
    if (isVideoPlaying) {
      const contentTimer = setTimeout(() => {
        setShowContentOverVideo(true);
      }, 7000); // 7 seconds delay for welcome message

      // Reset to static image after video ends (video is ~3 minutes = 180 seconds)
      const videoEndTimer = setTimeout(() => {
        setIsVideoPlaying(false);
        setShowContentOverVideo(false);
      }, 180000); // 180 seconds (3 minutes)

      return () => {
        clearTimeout(contentTimer);
        clearTimeout(videoEndTimer);
      };
    } else {
      setShowContentOverVideo(false);
    }
  }, [isVideoPlaying]);

  // Show only 2 cottages on home
  const featuredCottages = cottages?.slice(0, 2) || [];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!isVideoPlaying ? (
            <>
              {/* Carousel background images */}
              {heroImages.map((img, index) => (
                <motion.img
                  key={img}
                  src={img}
                  alt={`The Sarai at Toria Landscape ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 1.5 }} // Smooth 1.5s crossfade
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
              <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </>
          ) : (
            <>
              {/* Vimeo video player */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/319473245?autoplay=1&byline=0&title=0&muted=1"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="The Sarai at Toria"
                />
              </div>
              <div className="absolute inset-0 bg-black/20" />
            </>
          )}
        </div>

        {
          (!isVideoPlaying || showContentOverVideo) && (
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

              {/* Watch the film button - only show when video is not playing */}
              {!isVideoPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">Watch the film</span>
                  </button>
                </motion.div>
              )}
            </div>
          )
        }

        {/* Close video button - Moved outside to ensure clickability */}
        {
          isVideoPlaying && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setIsVideoPlaying(false);
                setShowContentOverVideo(false);
              }}
              className="absolute top-8 right-8 z-[60] p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors border border-white/20 hover:border-white/50 cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </motion.button>
          )
        }

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowRight className="rotate-90 w-6 h-6" />
        </motion.div>
      </section >

      {/* Intro Section */}
      <section className="section-padding container-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative p-4">
            {/* Unsplash image: 'safari couple sitting' or 'nature resort interior' */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative z-10 border-4 border-accent/20 box-border">
              <img
                src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2669&auto=format&fit=crop"
                alt="Colorful bird in nature"
                className="w-full h-full object-cover"
              />
            </div>
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
      </section >

      {/* Featured Cottages */}
      < section className="section-padding bg-muted/50 container-padding" >
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
      </section >

      {/* Experience Highlights - Parallax-ish */}
      <section className="relative py-32 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Unsplash: 'tiger safari india' - faint background texture */}
          <img
            src="https://images.unsplash.com/photo-1505553877995-1f92e850b297?q=80&w=2692&auto=format&fit=crop"
            alt="Tiger Safari"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-padding max-w-7xl mx-auto text-center">
          <SectionHeader
            subtitle="Experiences"
            title="Adventures in the Wild"
            description="From tiger safaris in Panna National Park to sunset boat rides on the pristine Ken River, discover the secrets of Madhya Pradesh."
            className="mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Tiger Safari", desc: "Explore Panna Tiger Reserve with expert naturalists.", icon: "🐾" },
              { title: "River Boat Ride", desc: "Drift along the Ken River spotting birds and crocodiles.", icon: "🛶" },
              { title: "Khajuraho Temples", desc: "Visit the UNESCO World Heritage erotic temples nearby.", image: "/images/temple.jpg", icon: "🏛️" },
            ].map((item: { title: string; desc: string; icon: string; image?: string }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg mx-auto shadow-md" />
                  ) : (
                    <div className="text-4xl">{item.icon}</div>
                  )}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
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
      </section >

      {/* Inquiry Form Section */}
      < section className="section-padding bg-secondary/30 container-padding" id="booking" >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Contact Us"
            title="Begin Your Journey"
            description="Ready to experience the untamed beauty of Panna? Send us an inquiry and we will curate your perfect stay."
          />
          <InquiryForm />
        </div>
      </section >

      <Footer />
    </div >
  );
}
