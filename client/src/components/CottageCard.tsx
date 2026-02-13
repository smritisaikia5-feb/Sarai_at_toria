import { Link } from "wouter";
import { ArrowRight, Users, Wifi, Wind } from "lucide-react";
import { type Cottage } from "@shared/schema";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CottageCardProps {
  cottage: Cottage;
  index: number;
}

export function CottageCard({ cottage, index }: CottageCardProps) {
  // Use a fallback image if necessary, but ideally api provides real urls
  // Using generic nature images for demo if url is empty
  const bgImage = cottage.imageUrl || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={bgImage} 
          alt={cottage.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-sm shadow-sm">
          {cottage.type}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
            {cottage.name}
          </h3>
          <span className="text-lg font-medium text-accent">
            ${cottage.price}<span className="text-sm text-muted-foreground font-normal">/night</span>
          </span>
        </div>
        
        <p className="text-muted-foreground line-clamp-3 mb-6">
          {cottage.description}
        </p>
        
        <div className="flex gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Up to {cottage.capacity} Guests</span>
          </div>
          {/* Static icons for demo - ideally from features array */}
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4" />
            <span>Eco-Cooling</span>
          </div>
        </div>
        
        <Link href={`/accommodation`}>
          <span className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors cursor-pointer group/link">
            View Details <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
