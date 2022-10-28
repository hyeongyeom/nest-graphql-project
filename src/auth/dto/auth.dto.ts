import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType({ description: '모두 필수' })
export class LoginInput extends PickType(User, [
  'email',
  'password',
] as const) {}

@ObjectType({ description: '로그인 Output.' })
export class LoginOutput {
  @Field(() => Int)
  publicId: number;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
