import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Partner } from './partner.entity';

@ObjectType()
@Entity('partner_type')
export class PartnerType {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({unique: true})
    name: string;

    // make relation with partners, one partner_type has many partners
    @Field(() => [Partner])
    // @OneToMany(() => Partner, (partner) => partner.partner_type)
    partners: Partner[];
}
