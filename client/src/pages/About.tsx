import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-12">
      <Navigation />

      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="/images/hero-1.png"
            alt="About Us"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <img
            src="/images/logo.png"
            alt="The Sarai at Toria Logo"
            className="w-48 md:w-64 h-auto mx-auto drop-shadow-md"
          />
        </div>
      </div>

      {/* The people behind The Sarai at Toria */}
      <section className="container-padding max-w-7xl mx-auto mb-20 section-padding">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-700 mb-10 font-bold text-center">
          The people behind The Sarai at Toria
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src="/images/About Us (Raghu Joanna ) 1.jpg"
              alt="Raghu and Joanna"
              className="w-full h-80 object-cover mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The Sarai at Toria is the vision of a husband and wife partnership with a passion for wildlife and conservation.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Born in Madhya Pradesh, Dr. Raghu Chundawat is a conservation biologist whose main studies have been on snow leopards and tigers. His pioneering ten-year research on tigers took place in the Panna Tiger Reserve and has been immortalised in the BBC Natural World documentary, "Tigers of the Emerald Forest".
            </p>
          </div>
          <div>
            <img
              src="/images/About US (People ) 1.jpg"
              alt="Our Staff"
              className="w-full h-80 object-cover mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Joanna Van Gruisen is from the U.K. but she has lived in the sub-continent for over thirty years. She is a wildlife photographer, writer and conservationist.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our aim is to manage the Sarai at Toria in an environmentally and socially responsible manner, providing comfort and indulgence while protecting the natural and the cultural environment.
            </p>
          </div>
        </div>
      </section>

      {/* The Sarai Story */}
      <section className="container-padding max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-700 mb-10 font-bold text-center">
          The Sarai Story
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <img
            src="/images/About US (Story) 1.jpg"
            alt="Raghu and Joanna with Tiger"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/images/About US (Story 3 ).jpg"
            alt="Sarai Story 3"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/images/About Us (story ) 4.jpg"
            alt="Sarai Story 4"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/images/About us (story) 5.jpg"
            alt="Sarai Story 5"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>
              Joanna, an erstwhile wildlife film-maker/photographer and Raghu, a conservation biologist, have lived and worked in this region for nearly 20 years. After completing a 10-year study on the ecology of the tiger in the Panna Tiger Reserve, we were keen to expand the research project into conservation activities with the surrounding community. Our aim in creating the Sarai at Toria was to provide an economic base so that we could live in the area and eventually make enough to fund the various projects we wished to start there. We began building in 2009 and opened the Sarai in October 2010 with 4 rooms. We now have 8 rooms and intend to remain this size so we can give all our guests a personalised experience and to keep a lighter footprint.
            </p>
            <p>
              Since we both came from a conservation background, our priority was and is to try to keep our carbon footprint as low as possible. The Sarai at Toria is not designed as a hotel but it is not a homestay in the usual meaning of that term, rather it takes many of the best features of both. In creating the Sarai at Toria we made extra effort to keep it as environmentally and culturally appropriate as possible. This permeates not only through the style of the interiors, the use of building materials, the solar power and exterior architectural design, but also through to the service and food.
            </p>
            <p>
              We are situated in such beautiful rural countryside and we want you to enjoy it to the full: so, rather than enclose you in isolating air-conditioned rooms, we have kept our communal area/sitting and dining as an open baithak (pavilion) and placed it at the best vantage point of the land with lovely views over the grassland and river to the hills beyond.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>
              For the first years we were entirely off grid with our power generated by a 10kw solar power unit. We have now upgraded and are part of Madhya Pradesh's net-metering system.
            </p>
            <p>
              From the start we eschewed the plastic bottle but we use the same technology that is used in bottling much of the 'mineral water' in India. Our four-stage, state of the art, RO system is installed in view so you can be reassured on the quality of the drinking water. As far as possible our menus are designed on the availability of organic and local produce, buying vegetables daily from surrounding markets and growing our own salads and herbs. At the Sarai at Toria we also bake our own breads, biscuits, croissants and cakes and make sure we use organic flour sourced locally.
            </p>
            <p>
              Our staff is from the local community, so along with providing you wonderful service, they can share their knowledge of the surrounding area and customs. A main facet of our ethos is to benefit the local economy and help bring development to an agricultural area that has few employment opportunities. The Sarai also engages with its neighbouring village and supports the local school there; we are initiating a larger scale project on environmental education in ten schools situated in the tiger habitats that surround the Panna Tiger Reserve.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
