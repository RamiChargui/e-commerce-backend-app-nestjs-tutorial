import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateProductDto } from "./dtos/update-product.dto";


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ){}

   
    
    /**
     * Creates a new product.
     */   
    public async create( dto:CreateProductDto){
        const product = this.productRepository.create(dto);
        return await this.productRepository.save(product);
    
    }
        
    public getAll(){
        return this.productRepository.find();
    }
    
    public async getOne( id:number){
        const product = await this.productRepository.findOne({where: {id}});
        if(!product) throw new NotFoundException("product not found");
        return product;
    }

    public async updateProduct( id:number, updateProductDto: UpdateProductDto){
        const product = await this.getOne(id);
        if(!product) throw new NotFoundException("product not found");
        product.title = updateProductDto.title ?? product?.title;
        product.description = updateProductDto.description ?? product?.description;
        product.price = updateProductDto.price ?? product?.price;
        return this.productRepository.save(product);
    }

    public async delete(id: number){
        const product= await this.getOne(id);
        if(!product) throw new NotFoundException("product not found");
        await this.productRepository.remove(product);
        return { message: 'product deleted successfully'}
    }

}