import { Request, Response } from 'express';
import { ProductService } from '../services/productService';
import { Product } from '../models/productModel';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;
    const newProduct = await ProductService.createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};