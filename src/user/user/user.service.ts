import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    const createdUser = this.userRepository.create(user);
    return await this.userRepository.save(createdUser);
  }
  async getUsers(): Promise<any> {
    return this.userRepository.findAndCount();
  }
}
