import { Product } from '../models/productModel';

export const validationUtils = {
  validateProduct(product: Product) {
    if (!product.name ||!product.price ||!product.stock ||!product.category) {
      throw new Error('All fields are required');
    }
  }
};