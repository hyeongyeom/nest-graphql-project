import { Injectable } from '@nestjs/common';
import { CreateNestedCommentInput } from './dto/create-nested-comment.input';
import { UpdateNestedCommentInput } from './dto/update-nested-comment.input';

@Injectable()
export class NestedCommentsService {
  create(createNestedCommentInput: CreateNestedCommentInput) {
    return 'This action adds a new nestedComment';
  }

  findAll() {
    return `This action returns all nestedComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nestedComment`;
  }

  update(id: number, updateNestedCommentInput: UpdateNestedCommentInput) {
    return `This action updates a #${id} nestedComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} nestedComment`;
  }
}
