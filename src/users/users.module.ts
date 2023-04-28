import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partner } from 'src/partners/entities/partner.entity';
import { PartnerType } from 'src/partners/entities/partner-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Partner, PartnerType])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
