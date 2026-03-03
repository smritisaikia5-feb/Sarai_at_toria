import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // --- Cottages ---
  app.get(api.cottages.list.path, async (_req, res) => {
    const cottages = await storage.getCottages();
    res.json(cottages);
  });

  app.get(api.cottages.get.path, async (req, res) => {
    const id = Number(req.params.id);
    const cottage = await storage.getCottage(id);
    if (!cottage) {
      return res.status(404).json({ message: "Cottage not found" });
    }
    res.json(cottage);
  });

  // --- Activities ---
  app.get(api.activities.list.path, async (_req, res) => {
    const activities = await storage.getActivities();
    res.json(activities);
  });

  // --- Testimonials ---
  app.get(api.testimonials.list.path, async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  // --- Inquiries ---
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true, message: "Inquiry received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data" });
      }
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // --- Seed Data ---
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingCottages = await storage.getCottages();
  if (existingCottages.length === 0) {
    console.log("Seeding database...");

    // Seed Cottages
    await storage.createCottage({
      name: "Classic Cottage",
      type: "Classic",
      description: "Our standalone cottages are designed with mud walls and thatched roofs, providing natural insulation and a rustic charm. Each cottage features a private verandah overlooking the grasslands.",
      price: 12000,
      capacity: 2,
      imageUrl: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop",
        "/images/classic_cottages-03.jpg",
        "/images/classic_cottages-04.jpg"
      ],
      features: ["King size bed", "Private verandah", "Attached stone bathroom", "Solar powered", "Fan cooled"],
    });

    await storage.createCottage({
      name: "Mezzanine Cottage",
      type: "Mezzanine",
      description: "Perfect for families or small groups, our mezzanine cottages offer extra space with a loft area. Built with the same eco-friendly materials and attention to detail.",
      price: 15000,
      capacity: 4,
      imageUrl: "/images/mezzanine_cottages-04.jpg",
      images: [
        "/images/mezzanine_cottages-04.jpg",
        "/images/mezzanine_cottages-01.jpg",
        "/images/mezzanine_cottages-02.jpg"
      ],
      features: ["King size bed", "Loft with twin beds", "Large verandah", "River view", "Spacious bathroom"],
    });

    // Seed Activities
    await storage.createActivity({
      title: "Panna Jungle Safari",
      description: "Panna Tiger Reserve is a little known gem .It is one of India's most dramatically scenic park and is an excellent place to see a variety of central India's wildlife. Especially good for raptors, it is an excellent destination for birders but its grasslands and dry forest also reveal a number of ungulates and small carnivores and can provide wonderful sighting of a leopard or tiger.",
      imageUrl: "/images/panna_jungle1.jpg",
      images: ["/images/panna_jungle1.jpg", "/images/panna_jungle5.jpg", "/images/panna_jungle3.jpg", "/images/panna_jungle4.jpg"],
    });

    await storage.createActivity({
      title: "Ken River Boat Ride",
      description: "A peace and serenity of a float on the river Ken at dawn or sunset is unsurpassed - a Zen experience. The tranquil paddle down this river garden is also rewarding for the birdwatchers as kingfishers , storks , ducks and even eagle owl are all part of the landscape. ",
      imageUrl: "/images/ken river 1.png",
      images: ["/images/ken river 1.png", "/images/ken river 2.jpg", "/images/ken river 3.jpg", "/images/ken_river 4.png"],
    });

    await storage.createActivity({
      title: "Khajuraho Temples",
      description: "Visit the UNESCO World Heritage western group of temples at Khajuraho, famous for their stunning Nagara-style architectural symbolism and erotic sculptures.",
      imageUrl: "/images/temple.jpg",
      images: [
        "/images/temple.jpg",
        "/images/sculptures2.jpg"
      ],
    });

    await storage.createActivity({
      title: "Yoga",
      description: "Experience serene yoga sessions by the riverside or amidst the tranquil grasslands. Rejuvenate your body and mind in the natural surroundings under the guidance of local experts.",
      imageUrl: "/images/yoga.jpg",
      images: ["/images/yoga.jpg", "/images/yoga 2.png", "/images/yoga 3.png", "/images/yoga 4.png"],
    });

    await storage.createActivity({
      title: "Ajaygarh Fort",
      description: "Explore the ancient and historically rich Ajaygarh Fort, perched high on the Vindhya hills. Enjoy panoramic views of the Ken River valley and the surrounding dense forests.",
      imageUrl: "/images/ajaygarh.jpg",
      images: ["/images/ajaygarh.jpg", "/images/ajaygarh 2.png", "/images/ajaygarh 3.png", "/images/ajaygarh 4.png"],
    });

    await storage.createActivity({
      title: "Kalinjar Fort",
      description: "Discover Kalinjar Fort, a remarkable historical site known for its deep mythological roots, ancient rock-cut sculptures, and sweeping views of the Bundelkhand plains.",
      imageUrl: "/images/kalinjar_fort.jpg",
      images: ["/images/kalinjar_fort.jpg", "/images/kalinjar 2.png", "/images/kalinjar 3.png", "/images/kalinjar 4.png", "/images/kalinjar 5.png"],
    });

    await storage.createActivity({
      title: "Raneh Falls",
      description: "Marvel at Raneh Falls, where the Ken River plunges into a deep 5km-long canyon made of pure crystalline granite in varying shades. A breathtaking natural wonder not far from the retreat.",
      imageUrl: "/images/raneh falls.jpg",
      images: ["/images/raneh falls.jpg", "/images/raneh falls 2.png", "/images/raneh falls 3.png", "/images/raneh falls 4.png"],
    });

    await storage.createActivity({
      title: "Pandav Falls",
      description: "A serene and quiet retreat located in the Panna Tiger Reserve. This bowl-shaped gorge features a tranquil waterfall that collects into a deep, clear pool, historically linked to the Pandavas.",
      imageUrl: "/images/Pandav-Fall_New.jpeg",
      images: [
        "/images/Pandav-Fall_New.jpeg",
        "/images/pandav fall 4.png",
        "/images/pandav fall 5.png",
        "/images/pandav falls 2.png",
        "/images/pandav falls 3.png"
      ],
    });

    // Seed Testimonials
    await storage.createTestimonial({
      name: "Sarah Jenkins",
      content: "An absolute gem! Raghu and Joanna are wonderful hosts. The food is incredible and the location is pure magic.",
      rating: 5,
      location: "London, UK",
    });

    await storage.createTestimonial({
      name: "Amit Patel",
      content: "The most peaceful place we've stayed in India. The cottages are beautiful and eco-friendly without compromising on comfort.",
      rating: 5,
      location: "Mumbai, India",
    });

    console.log("Database seeded successfully.");
  }
}
