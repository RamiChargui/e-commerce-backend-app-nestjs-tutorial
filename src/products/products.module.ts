import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Product } from "./product.entity";

@Module({
    controllers:[ProductsController],
    providers: [ProductService],
    imports : [TypeOrmModule.forFeature([Product])]
})
export class ProductsModule{

}