import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 bg-primary text-white container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-xl text-white/80">
            We'd love to hear from you. Plan your escape to the wild today.
          </p>
        </div>
      </div>

      <section className="section-padding container-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you have questions about our cottages, safaris, or travel logistics, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      The Sarai at Toria<br />
                      Village Toria, P.O. Madla<br />
                      Dist. Chhatarpur, MP 471101, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 987 654 3210</p>
                    <p className="text-sm text-muted-foreground/80">(Available 9 AM - 6 PM IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">reservations@saraiattoria.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-muted rounded-lg overflow-hidden border border-border shadow-inner relative group">
              {/* Static Map Image */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                alt="Map Location" 
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 px-4 py-2 rounded shadow text-sm font-bold text-primary">
                  View on Google Maps
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <InquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
