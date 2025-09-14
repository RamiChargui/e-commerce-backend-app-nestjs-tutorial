
import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    @Length(2,150)//or minLength(2) and maxLength(150)
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    @Min(0, {message: "price should not be less ten zero !"})
    price?: number;
}