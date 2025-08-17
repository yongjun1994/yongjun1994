import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }

  async getUser(email: string): Promise<User | null> {
    const result = await this.userRepository.findOne({
      where: { email },
    });
    return result;
  }

  async updateUser(email: string, _user: UpdateUserDto): Promise<User | null> {
    const user = await this.getUser(email);
    if (!user) {
      return null;
    }
    
    console.log(_user);
    user.username = _user.username;
    if (_user.password) {
      user.password = _user.password;
    }
    console.log(user);
    return this.userRepository.save(user);
  }

  deleteUser(email: string) {
    return this.userRepository.delete({ email });
  }
}
