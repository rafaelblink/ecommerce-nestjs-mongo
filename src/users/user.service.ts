import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';
import { User } from './user.entity';
import faker = require('faker');
import * as CryptoJS from 'crypto-js';

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

  async remove(id) {
    const user = this.userRepository.findOne(id).then(result => {
      this.userRepository.delete(result);
    });
  }

  async save(user: User) {
    user.isActive = true;
    user.password = CryptoJS.HmacSHA1(user.password, 'jojo').toString();
    return await this.userRepository.save(user);
  }
}