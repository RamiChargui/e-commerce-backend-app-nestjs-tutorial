import { Module } from "@nestjs/common";
import { ReviewsController } from "./reviews.controller";
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./review.entity";

@Module({
    controllers: [ReviewsController],
    imports: [TypeOrmModule.forFeature([Review])],
})
export class ReviewsModule{

}