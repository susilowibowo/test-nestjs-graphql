import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, Validate, ValidationArguments } from 'class-validator';
import { MarketingExistsConstraint } from './marketing-exist.constraint';
import { IsInt } from 'class-validator';
import { PartnerType } from 'src/partners/entities/partner-type.entity';
import { partnerTypeExist } from './partner-type-exist.constraint';

@InputType()
export class UserRegisterInput {
    // make DTO from this request body
    // {
    //     "name": "John Doe",
    //     "email": "john.doe@gmail.com",
    //     "phone": "6281234567890",
    //     "marketing_code": "pdm03",
    //     "partner_type_id": 1,
    // }
    // name, email, phone, from users table, marketing_code from marketing table, partner_type_id from partner_type table
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    email: string;

    @Field()
    @IsNotEmpty()
    phone: string;

    @Field()
    @IsNotEmpty()
    // @Validate(MarketingExistsConstraint)
    marketing_code: string;

    // for validation partner_type_id is exist or not on partner_type table
    @Field(() => Int)
    @IsNotEmpty()
    @IsInt()
    // make validation partner is exsit or not, still return error even the partner_type_id is exist
    // @Validate(partnerTypeExist)
    partner_type_id: number;
}
