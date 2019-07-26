import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { User } from './user.entity';
import crypto = require('crypto');
import faker = require('faker');

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

  async remove(user: User) {
    return await this.userRepository.remove(user);
  }

  async save(user: User) {
    user.isActive = true;
    user.password = crypto.createHmac('sha1', user.password)
    .update('banda_dejavu')
    .digest('hex');
    return await this.userRepository.save(user);
  }
}