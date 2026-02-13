import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Fetch Cottages
export function useCottages() {
  return useQuery({
    queryKey: [api.cottages.list.path],
    queryFn: async () => {
      const res = await fetch(api.cottages.list.path);
      if (!res.ok) throw new Error("Failed to fetch cottages");
      return api.cottages.list.responses[200].parse(await res.json());
    },
  });
}

// Fetch Single Cottage
export function useCottage(id: number) {
  return useQuery({
    queryKey: [api.cottages.get.path, id],
    queryFn: async () => {
      const res = await fetch(api.cottages.get.path.replace(":id", String(id)));
      if (!res.ok) throw new Error("Failed to fetch cottage details");
      return api.cottages.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

// Fetch Activities
export function useActivities() {
  return useQuery({
    queryKey: [api.activities.list.path],
    queryFn: async () => {
      const res = await fetch(api.activities.list.path);
      if (!res.ok) throw new Error("Failed to fetch activities");
      return api.activities.list.responses[200].parse(await res.json());
    },
  });
}

// Fetch Testimonials
export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      return api.testimonials.list.responses[200].parse(await res.json());
    },
  });
}

// Submit Inquiry
export function useSubmitInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }
      
      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
        variant: "default", 
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
