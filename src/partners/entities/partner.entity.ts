import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PartnerType } from './partner-type.entity';

@ObjectType()
@Entity('partners')
export class Partner {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column({ nullable: true, default: null })
  pdm_id: number;

  @Field()
  @Column()
  marketing_id: number;

  @Field()
  @Column({ nullable: true, default: null })
  partner_group_id: number;

  @Field()
  @Column()
  partner_type_id: number;

  @Field()
  @Column({ nullable: true, default: null })
  level: number;

  @Field()
  @Column({ nullable: true, default: null })
  parent_id: number;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: Date;

  // make relation with users, one partner has one user
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.partners)
  @JoinColumn({ name: "user_id" })
  user: User;

  // make relation with partner_types, one partner has one partner_type
  @Field(() => PartnerType)
  @ManyToOne(() => PartnerType)
  @JoinColumn({ name: "partner_type_id" })
  partner_type: PartnerType;
}
