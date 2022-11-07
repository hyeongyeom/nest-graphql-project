import {
  InputType,
  Field,
  Int,
  PartialType,
  PickType,
  IntersectionType,
} from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends IntersectionType(
  PickType(User, ['id'] as const),
  PartialType(PickType(User, ['nickname', 'email', 'role', 'garde'] as const)),
) {}
