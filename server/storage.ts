import {
  cottages, activities, inquiries, testimonials,
  type Cottage, type InsertCottage,
  type Activity, type InsertActivity,
  type Inquiry, type InsertInquiry,
  type Testimonial, type InsertTestimonial
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Cottages
  getCottages(): Promise<Cottage[]>;
  getCottage(id: number): Promise<Cottage | undefined>;
  createCottage(cottage: InsertCottage): Promise<Cottage>;

  // Activities
  getActivities(): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;

  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getCottages(): Promise<Cottage[]> {
    return await db.select().from(cottages);
  }

  async getCottage(id: number): Promise<Cottage | undefined> {
    const [cottage] = await db.select().from(cottages).where(eq(cottages.id, id));
    return cottage;
  }

  async createCottage(insertCottage: InsertCottage): Promise<Cottage> {
    const [cottage] = await db.insert(cottages).values(insertCottage).returning();
    return cottage;
  }

  async getActivities(): Promise<Activity[]> {
    return await db.select().from(activities);
  }

  async createActivity(insertActivity: InsertActivity): Promise<Activity> {
    const [activity] = await db.insert(activities).values(insertActivity).returning();
    return activity;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db.insert(testimonials).values(insertTestimonial).returning();
    return testimonial;
  }
}

export const storage = new DatabaseStorage();
