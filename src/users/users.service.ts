import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Partner } from 'src/partners/entities/partner.entity';

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>,
  ) {}

  async registerUser(userInput: any): Promise<boolean> {
    const { name, email, phone, marketing_code, partner_type_id } = userInput;
    
    // create user first
    const user = new User();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.username = email;
    user.role_id = 11;
    await this.userRepository.save(user);

    // find marketing by marketing_code (no entity so use partnerRepository)
    const marketing = await this.partnerRepository.query(
      'SELECT * FROM marketing WHERE code = ? LIMIT 1',
      [marketing_code],
    );

    if (!marketing || marketing === undefined || marketing.length === 0) {
      return false; // return false if marketing entity is not found
    }

    await this.partnerRepository.save({ user_id: user.id, marketing_id: marketing[0].id, partner_type_id: partner_type_id });

    return true;
  }
  

  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
