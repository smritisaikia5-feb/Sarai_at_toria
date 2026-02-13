import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useActivities } from "@/hooks/use-content";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Experiences() {
  const { data: activities, isLoading } = useActivities();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Unsplash: 'jeep safari' */}
          <img 
            src="https://images.unsplash.com/photo-1534177616072-ef7dc12044f9?q=80&w=2670&auto=format&fit=crop" 
            alt="Experiences Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Experiences</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Immerse yourself in the landscape of Panna through our curated adventures.
          </p>
        </div>
      </div>

      <section className="section-padding container-padding">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-24">
              {activities?.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className={cn(
                    "flex flex-col md:flex-row gap-12 lg:gap-20 items-center",
                    index % 2 === 1 && "md:flex-row-reverse"
                  )}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl group">
                      <img 
                        src={activity.imageUrl} 
                        alt={activity.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 border-[1px] border-white/20 m-4 rounded-sm" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl lg:text-4xl font-serif mb-6 text-primary">{activity.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {activity.description}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                        Book Activity
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
