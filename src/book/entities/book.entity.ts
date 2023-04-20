// make book entity for typeorm and graphql
// Path: src\book\book.entity.ts
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('books')
export class Book {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({unique: true})
    title: string;

    @Field()
    @Column()
    author: string;

    @Field()
    @Column({unique: true})
    isbn: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    published: string;
}