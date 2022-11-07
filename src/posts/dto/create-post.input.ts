import { InputType, Int, Field, IntersectionType, PickType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput extends IntersectionType(
  PickType(Post, ['nickname', 'email', 'password'] as const),
  PartialType(PickType(User, ['role'] as const)),
) {}
