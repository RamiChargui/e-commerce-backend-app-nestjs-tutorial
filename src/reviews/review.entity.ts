import { Product } from "src/products/product.entity";
import { CURRENT_TIMESTAMP } from "../utils/constants";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "src/users/user.entity";

@Entity({ name : 'review_db'})
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;
    @Column()
    comment: string;

    @CreateDateColumn({ type: 'timestamp', default: () => CURRENT_TIMESTAMP })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP })
    updatedAt: Date;

    @ManyToOne(() => Product, (product) => product.reviews, { onDelete: 'CASCADE' })
    product: Product;
    @ManyToOne(() => User, (user) => user.reviews, { onDelete: 'CASCADE' })
    user: User;

}