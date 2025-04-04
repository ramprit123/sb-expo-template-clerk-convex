import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    status: v.optional(v.string()),
    propertyType: v.optional(v.string()),
    minPrice: v.optional(v.number()),
    maxPrice: v.optional(v.number()),
    city: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const properties = await ctx.db
      .query("properties")
      .filter((q) => {
        let filters = [];
        if (args.status) {
          filters.push(q.eq(q.field("status"), args.status));
        }
        if (args.propertyType) {
          filters.push(q.eq(q.field("propertyType"), args.propertyType));
        }
        if (args.minPrice) {
          filters.push(q.gte(q.field("price"), args.minPrice));
        }
        if (args.maxPrice) {
          filters.push(q.lte(q.field("price"), args.maxPrice));
        }
        if (args.city) {
          filters.push(q.eq(q.field("location.city"), args.city));
        }
        return q.and(...filters);
      })
      .collect();

    return properties;
  },
});

export const create = mutation({
  args: {
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
    status: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const propertyId = await ctx.db.insert("properties", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return propertyId;
  },
});

export const update = mutation({
  args: {
    id: v.id("properties"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    location: v.optional(
      v.object({
        address: v.string(),
        city: v.string(),
        state: v.string(),
        zipCode: v.string(),
        coordinates: v.object({
          latitude: v.number(),
          longitude: v.number(),
        }),
      })
    ),
    features: v.optional(v.array(v.string())),
    images: v.optional(v.array(v.string())),
    bedrooms: v.optional(v.number()),
    bathrooms: v.optional(v.number()),
    squareFeet: v.optional(v.number()),
    propertyType: v.optional(v.string()),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now(),
    });
  },
});