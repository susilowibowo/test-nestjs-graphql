import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Matches } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  author: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  isbn: string;

  @Field()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  published: string;
}
