import { Product } from '../models/productModel';
import { validationUtils } from '../utils/validationUtils';

const products: Product[] = [];

export class ProductService {
  static async createProduct(product: Product): Promise<Product> {
    validationUtils.validateProduct(product);
    const existingProduct = products.find(p => p.name === product.name);
    if (existingProduct) {
      throw new Error('Product name already exists');
    }
    if (product.price < 0) {
      throw new Error('Price cannot be negative');
    }
    product.id = Date.now().toString();
    products.push(product);
    return product;
  }
}