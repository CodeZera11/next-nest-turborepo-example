import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  async createProduct(createProductRequest: CreateProductRequest) {
    const product: Product = {
      ...createProductRequest,
      id: Math.random().toString(36).substring(7),
    };

    this.products.push(product);

    return product;
  }

  async getProducts() {
    return this.products;
  }
}
