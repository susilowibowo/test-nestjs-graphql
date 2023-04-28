import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, DataSource } from 'typeorm';
import { Partner } from 'src/partners/entities/partner.entity';

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>,
    private dataSource: DataSource,
  ) {}

  async registerUser(userInput: any): Promise<boolean> {
    const { name, email, phone, marketing_code, partner_type_id } = userInput;

    // create query runner to run transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // create user first
      const user = new User();
      user.name = name;
      user.email = email;
      user.phone = phone;
      user.username = email;
      user.role_id = 11;
      await queryRunner.manager.save(user);

      // find marketing by marketing_code (no entity so use partnerRepository)
      const marketing = await this.partnerRepository.query(
        'SELECT * FROM marketing WHERE code = ? LIMIT 1',
        [marketing_code],
      );

      if (!marketing || marketing === undefined || marketing.length === 0) {
        return false; // return false if marketing entity is not found
      }

      const partner = new Partner();
      partner.user = user;
      partner.marketing_id = marketing[0].id;
      partner.partner_type_id = partner_type_id;
      await queryRunner.manager.save(partner);

      await queryRunner.commitTransaction();
      return true;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      return false;
    } finally {
      await queryRunner.release();
    }
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
