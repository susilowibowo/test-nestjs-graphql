import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Partner } from 'src/partners/entities/partner.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  role_id: number;

  @Field()
  @Column({ nullable: true, default: null })
  wp_id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({unique: true})
  phone: string;

  @Field({nullable: true})
  @Column({ nullable: true, default: null })
  telegram_id: string;

  @Field()
  @Column({unique: true})
  username: string;

  @Field()
  @Column({ nullable: true, default: null })
  password: string;

  @Field()
  @Column({unique: true})
  email: string;

  @Field()
  @Column({ nullable: true, default: null })
  remember_token: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: Date;

  //make relation with roles, one user has one role
  @Field(() => Role)
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role: Role;

  // make relation one user can have many partners
  @Field(() => [Partner])
  @OneToMany(() => Partner, (partner) => partner.user)
  partners: Partner[];

}
