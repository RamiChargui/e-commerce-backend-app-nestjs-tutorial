import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { title } from "process";
import { ProductService } from "./product.service";
import { UpdateDescription } from "typeorm";
import { UpdateProductDto } from "./dtos/update-product.dto";



@Controller("api/products")
export class ProductsController{

    constructor(private readonly productSerice: ProductService){}

    @Post()
    public createProduct(@Body(new ValidationPipe({whitelist: true})) body:CreateProductDto){
        return this.productSerice.create(body);
    }

    @Get()
    public getAllProducts(){
        return this.productSerice.getAll();
    }

    @Get(":id")
    public getOneProduct(@Param("id", ParseIntPipe) id:number){

        return this.productSerice.getOne(id);
    }

    @Put(":id")
    public updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body:UpdateProductDto){
        return this.productSerice.updateProduct(id, body);
    }

    @Delete(":id")
    public deleteProduct(@Param("id", ParseIntPipe) id: number){
        return this.productSerice.delete(id);
    }

}