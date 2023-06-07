import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm/';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

// import { ProductsModule } from '../products/products.module';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, User, Product])],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
