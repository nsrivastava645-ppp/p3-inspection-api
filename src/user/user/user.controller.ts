import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../user.entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    createUserDto: User,
  ) {
    const user = await this.userService.createUser(createUserDto);
    return { user };
  }

  @Get()
  async getUsers() {
    const [users, totalRecords] = await this.userService.getUsers();
    return { users, totalRecords };
  }
}
