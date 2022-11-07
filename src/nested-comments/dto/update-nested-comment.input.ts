import { CreateNestedCommentInput } from './create-nested-comment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNestedCommentInput extends PartialType(CreateNestedCommentInput) {
  @Field(() => Int)
  id: number;
}
