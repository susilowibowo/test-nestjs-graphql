import { Module } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnersResolver } from './partners.resolver';

@Module({
  providers: [PartnersResolver, PartnersService]
})
export class PartnersModule {}
