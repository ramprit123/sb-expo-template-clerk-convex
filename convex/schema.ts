import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  properties: defineTable({
    title: v.string(),
    description: v.string(),
    price: v.number(),
    location: v.object({
      address: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      coordinates: v.object({
        latitude: v.number(),
        longitude: v.number(),
      }),
    }),
    features: v.array(v.string()),
    images: v.array(v.string()),
    bedrooms: v.number(),
    bathrooms: v.number(),
    squareFeet: v.number(),
    propertyType: v.string(),
    status: v.string(), // For Sale, For Rent, Sold, etc.
    userId: v.string(), // Clerk user ID
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  savedProperties: defineTable({
    propertyId: v.id("properties"),
    userId: v.string(), // Clerk user ID
    createdAt: v.number(),
  }),

  userProfiles: defineTable({
    userId: v.string(), // Clerk user ID
    name: v.string(),
    email: v.string(),
    profileImage: v.optional(v.string()),
    bio: v.optional(v.string()),
    phone: v.optional(v.string()),
    role: v.string(), // Buyer, Seller, Agent
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  propertyViews: defineTable({
    propertyId: v.id("properties"),
    userId: v.string(), // Clerk user ID
    viewedAt: v.number(),
  }),

  messages: defineTable({
    senderId: v.string(), // Clerk user ID
    receiverId: v.string(), // Clerk user ID
    propertyId: v.id("properties"),
    content: v.string(),
    createdAt: v.number(),
    read: v.boolean(),
  }),

  reviews: defineTable({
    propertyId: v.id("properties"),
    userId: v.string(), // Clerk user ID
    rating: v.number(),
    comment: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});