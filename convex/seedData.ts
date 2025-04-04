import { mutation } from "./_generated/server";

export const seedDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Seed Properties
    const properties = [
      {
        title: "Modern Luxury Villa",
        description: "Stunning modern villa with ocean views",
        price: 2500000,
        location: {
          address: "123 Ocean Drive",
          city: "Malibu",
          state: "CA",
          zipCode: "90265",
          coordinates: {
            latitude: 34.0259,
            longitude: -118.7798,
          },
        },
        features: ["Pool", "Ocean View", "Smart Home", "Wine Cellar"],
        images: [
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
          "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
        ],
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 6500,
        propertyType: "Villa",
        status: "For Sale",
        userId: "user_example1",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        title: "Downtown Penthouse",
        description: "Luxurious penthouse in the heart of downtown",
        price: 3800000,
        location: {
          address: "456 City Center",
          city: "Los Angeles",
          state: "CA",
          zipCode: "90012",
          coordinates: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
        features: ["Rooftop Terrace", "City Views", "Private Elevator", "Gym"],
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        ],
        bedrooms: 4,
        bathrooms: 4.5,
        squareFeet: 4200,
        propertyType: "Penthouse",
        status: "For Sale",
        userId: "user_example2",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ];

    for (const property of properties) {
      await ctx.db.insert("properties", property);
    }

    // Seed User Profiles
    const users = [
      {
        userId: "user_example1",
        name: "John Doe",
        email: "john@example.com",
        profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        bio: "Luxury real estate agent with 10 years of experience",
        phone: "555-0123",
        role: "Agent",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        userId: "user_example2",
        name: "Jane Smith",
        email: "jane@example.com",
        profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        bio: "First-time homebuyer looking for the perfect property",
        phone: "555-0124",
        role: "Buyer",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ];

    for (const user of users) {
      await ctx.db.insert("userProfiles", user);
    }
  },
});