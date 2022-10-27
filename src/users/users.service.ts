import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userRepository.save({ id, updateUserInput });
  }

  remove(id: string) {
    return this.userRepository.delete({ id });
  }
}
