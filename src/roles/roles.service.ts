import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
// import { UpdateRoleInput } from './dto/update-role.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    return await this.roleRepository.save(createRoleInput);
  }

  // findAll() {
  //   return `This action returns all roles`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} role`;
  // }

  // update(id: number, updateRoleInput: UpdateRoleInput) {
  //   return `This action updates a #${id} role`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} role`;
  // }
}
