import { Injectable } from '@nestjs/common';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';

@Injectable()
export class PartnersService {
  create(createPartnerInput: CreatePartnerInput) {
    return 'This action adds a new partner';
  }

  findAll() {
    return `This action returns all partners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partner`;
  }

  update(id: number, updatePartnerInput: UpdatePartnerInput) {
    return `This action updates a #${id} partner`;
  }

  remove(id: number) {
    return `This action removes a #${id} partner`;
  }
}
