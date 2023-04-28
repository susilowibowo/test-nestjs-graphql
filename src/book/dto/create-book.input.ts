import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

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
}
