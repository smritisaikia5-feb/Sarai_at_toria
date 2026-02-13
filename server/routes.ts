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
      features: ["King size bed", "Private verandah", "Attached stone bathroom", "Solar powered", "Fan cooled"],
    });

    await storage.createCottage({
      name: "Mezzanine Cottage",
      type: "Mezzanine",
      description: "Perfect for families or small groups, our mezzanine cottages offer extra space with a loft area. Built with the same eco-friendly materials and attention to detail.",
      price: 15000,
      capacity: 4,
      imageUrl: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2072&auto=format&fit=crop",
      features: ["King size bed", "Loft with twin beds", "Large verandah", "River view", "Spacious bathroom"],
    });

    // Seed Activities
    await storage.createActivity({
      title: "Tiger Safari at Panna",
      description: "Explore the Panna Tiger Reserve, known for its tiger reintroduction success story. Spot leopards, sloth bears, and over 200 bird species.",
      imageUrl: "https://images.unsplash.com/photo-1505527376722-19597c458a69?q=80&w=2070&auto=format&fit=crop",
    });

    await storage.createActivity({
      title: "Ken River Boat Ride",
      description: "A serene boat ride on the Ken River offers spectacular bird watching opportunities and a chance to spot crocodiles basking on the banks.",
      imageUrl: "https://images.unsplash.com/photo-1544636952-19349e29df14?q=80&w=2070&auto=format&fit=crop",
    });

    await storage.createActivity({
      title: "Khajuraho Temples",
      description: "Visit the UNESCO World Heritage western group of temples at Khajuraho, famous for their stunning Nagara-style architectural symbolism and erotic sculptures.",
      imageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1974&auto=format&fit=crop",
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
