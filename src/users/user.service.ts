import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
const crypto = require('crypto');



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async save(user: User) {    
    user.isActive = true;
    user.password = crypto.createHmac('sha1', user.password)
    .update('J0J0_T0DYYNH0')
    .digest('hex');
    return await this.userRepository.save(user);
  }
}