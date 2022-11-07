import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NestedCommentsService } from './nested-comments.service';
import { NestedComment } from './entities/nested-comment.entity';
import { CreateNestedCommentInput } from './dto/create-nested-comment.input';
import { UpdateNestedCommentInput } from './dto/update-nested-comment.input';

@Resolver(() => NestedComment)
export class NestedCommentsResolver {
  constructor(private readonly nestedCommentsService: NestedCommentsService) {}

  @Mutation(() => NestedComment)
  createNestedComment(@Args('createNestedCommentInput') createNestedCommentInput: CreateNestedCommentInput) {
    return this.nestedCommentsService.create(createNestedCommentInput);
  }

  @Query(() => [NestedComment], { name: 'nestedComments' })
  findAll() {
    return this.nestedCommentsService.findAll();
  }

  @Query(() => NestedComment, { name: 'nestedComment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.nestedCommentsService.findOne(id);
  }

  @Mutation(() => NestedComment)
  updateNestedComment(@Args('updateNestedCommentInput') updateNestedCommentInput: UpdateNestedCommentInput) {
    return this.nestedCommentsService.update(updateNestedCommentInput.id, updateNestedCommentInput);
  }

  @Mutation(() => NestedComment)
  removeNestedComment(@Args('id', { type: () => Int }) id: number) {
    return this.nestedCommentsService.remove(id);
  }
}
