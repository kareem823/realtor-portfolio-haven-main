
import { z } from "zod";

// User schema with Zod validation
export const userSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  username: z.string().min(3),
  password: z.string().min(6),
  isAdmin: z.boolean().default(false)
});

export const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6)
});

// Property schema with Zod validation
export const propertySchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  price: z.number().positive(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  squareFeet: z.number().int().positive(),
  imageUrl: z.string().url(),
  featured: z.boolean().default(false)
});

// Blog post schema with Zod validation
export const blogPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  imageUrl: z.string().url(),
  createdAt: z.string(),
  summary: z.string().min(10).max(200)
});

// Subscription schema with Zod validation
export const subscriptionSchema = z.object({
  userId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  active: z.boolean().default(true)
});

export type User = z.infer<typeof userSchema> & { _id?: string };
export type LoginUser = z.infer<typeof loginSchema>;
export type Property = z.infer<typeof propertySchema> & { _id?: string };
export type BlogPost = z.infer<typeof blogPostSchema> & { _id?: string };
export type Subscription = z.infer<typeof subscriptionSchema> & { _id?: string };
