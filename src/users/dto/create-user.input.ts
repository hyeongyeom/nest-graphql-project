import { InputType, Int, Field, IntersectionType, PickType, PartialType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import { Column } from 'typeorm';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends IntersectionType(
  PickType(User, ['nickname','email', 'password'] as const),
  PartialType(PickType(User, ['role'] as const))
) {
 
  
}
