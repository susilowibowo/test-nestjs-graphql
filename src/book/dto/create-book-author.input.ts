import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBookAuthorInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  isbn: string;

  @Field()
  published: Date;

  @Field(() => Date)
  authorName: string;
  
  @Field()
  authorAge: number;
}
