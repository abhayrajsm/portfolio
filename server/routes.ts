import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Neon E-Commerce",
      description: "A full-stack e-commerce platform with a modern neon aesthetic, built with React and Node.js.",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      projectUrl: "https://example.com",
      tags: ["React", "Node.js", "PostgreSQL"],
      category: "development",
      isFeatured: true
    });
    
    await storage.createProject({
      title: "Local Biz SEO Overhaul",
      description: "Complete SEO strategy implementation for a local bakery, resulting in 200% traffic growth.",
      imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=80",
      projectUrl: "https://example.com",
      tags: ["SEO", "Analytics", "Strategy"],
      category: "seo",
      isFeatured: true
    });

    await storage.createProject({
      title: "Artistic Portfolio WP Theme",
      description: "A custom WordPress theme designed for artists, featuring dynamic galleries and custom post types.",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      projectUrl: "https://example.com",
      tags: ["WordPress", "PHP", "SCSS"],
      category: "wordpress",
      isFeatured: false
    });
    
    await storage.createProject({
      title: "Tech Blog Optimization",
      description: "Technical SEO audit and performance optimization for a high-traffic tech blog.",
      imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
      projectUrl: "https://example.com",
      tags: ["Technical SEO", "Performance", "Core Web Vitals"],
      category: "seo",
      isFeatured: false
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Messages
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Initialize seed data
  seedDatabase().catch(console.error);

  return httpServer;
}
