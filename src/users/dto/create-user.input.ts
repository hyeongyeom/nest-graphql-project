import {
  InputType,
  Int,
  Field,
  IntersectionType,
  PickType,
  PartialType,
} from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends IntersectionType(
  PickType(User, ['nickname', 'email', 'password'] as const),
  PartialType(PickType(User, ['role'] as const)),
) {}
