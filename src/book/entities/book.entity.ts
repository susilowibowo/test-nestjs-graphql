// make book entity for typeorm and graphql
// Path: src\book\book.entity.ts
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
    @Column({unique: true})
    isbn: string;

    @Field({nullable: true})
    @Column()
    description: string;

    @Field({nullable: true})
    @Column({ type: 'date' })
    published: Date;
    
    @Field(() => Author)
    @ManyToOne(() => Author, (author) => author.books, { eager: true })
    @JoinColumn({ name: "author_id" })
    author: Author;

    @Field()
    @Column()
    author_id: number;
}