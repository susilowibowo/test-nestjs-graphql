import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('authors')
export class Author {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({nullable: true})
  @Column()
  age: number;

  @OneToMany(() => Book, book => book.author)
  books: Book[];
}
