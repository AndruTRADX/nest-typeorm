import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  // Crear producto
  create(data: CreateProductDto) {
    // Creamos una nueva instancia del producto desde la clase
    const newProduct = this.productRepo.create(data);

    // Guardamos el nuevo producto en la db
    return this.productRepo.save(newProduct);
  }

  // Actualizar producto
  async update(id: number, changes: UpdateProductDto) {
    // buscamos el producto
    const product = await this.productRepo.findOneBy({ id });

    // actualizamos el producto
    this.productRepo.merge(product, changes);

    // guardamos los datos
    return this.productRepo.save(product);
  }

  // Borrar producto
  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
