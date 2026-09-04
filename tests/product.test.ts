import { createProduct } from '../src/controllers/productController';
import { ProductService } from '../src/services/productService';
import { Product } from '../src/models/productModel';
import request from 'supertest';
import express from 'express';

jest.mock('../src/services/productService');

const app = express();
app.use(express.json());
app.post('/products', createProduct);

describe('Product Controller', () => {
  it('should create a new product', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      price: 100,
      stock: 10,
      category: 'Test Category'
    };
    (ProductService.createProduct as jest.Mock).mockResolvedValue(mockProduct);
    const response = await request(app)
     .post('/products')
     .send(mockProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(mockProduct);
  });

  it('should return an error for duplicate product name', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      price: 100,
      stock: 10,
      category: 'Test Category'
    };
    (ProductService.createProduct as jest.Mock).mockRejectedValue(new Error('Product name already exists'));
    const response = await request(app)
     .post('/products')
     .send(mockProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Product name already exists');
  });
});