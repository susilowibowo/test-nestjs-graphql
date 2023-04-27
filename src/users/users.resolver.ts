import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserRegisterInput } from './dto/user-register.input';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(
      private readonly usersService: UsersService
    ) {}

  @Mutation(() => String)
  async registerUser(@Args('input') input:UserRegisterInput): Promise<string> {
    const result = await this.usersService.registerUser(input);

    if (result) {
      return 'User registration successful';
    } else {
      return 'Something is wrong, please try again in the meantime';
    }
  }
  
  // @Mutation(() => User)
  // createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.usersService.create(createUserInput);
  // }

  // @Query(() => [User], { name: 'users' })
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
