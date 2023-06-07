import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm/';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';

// import { ProductsModule } from '../products/products.module';
import { User } from './entities/user.entity';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, User, Order, OrderItem, Product]),
  ],
  controllers: [CustomerController, UsersController, OrderController],
  providers: [CustomersService, UsersService, OrderService],
})
export class UsersModule {}
