import { Request, Response, NextFunction, RequestHandler } from 'express';
import mongoose from 'mongoose';
import Resource from '../models/Resource'; // Ensure this is a Mongoose model

// Define the IResource interface
export interface IResource extends mongoose.Document {
  name: string;
  description: string;
  category: string;
}

export const createResource: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resource = new Resource(req.body); // No need to cast to IResource
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
};

export const getResources: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.query as { category?: string }; // Type the query parameters
    const filter = category ? { category } : {};
    const resources = await Resource.find(filter);
    res.json(resources);
  } catch (error) {
    next(error);
  }
};

export const getResourceById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resource = await Resource.findById(req.params.id);
      if (!resource) {
        res.status(404).json({ message: 'Resource not found' });
        return;
      }
      res.json(resource);
    } catch (error) {
      next(error);
    }
  };

export const updateResource: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!resource) {
        res.status(404).json({ message: 'Resource not found' });
        return;
      }
      res.json(resource);
    } catch (error) {
      next(error);
    }
};

export const deleteResource: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resource = await Resource.findByIdAndDelete(req.params.id);
      if (!resource) {
        res.status(404).json({ message: 'Resource not found' });
        return;
      }
      res.json({ message: 'Resource deleted successfully' });
    } catch (error) {
      next(error);
    }
};