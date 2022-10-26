import { Module } from '@nestjs/common';
import { NestedCommentsService } from './nested-comments.service';
import { NestedCommentsResolver } from './nested-comments.resolver';

@Module({
  providers: [NestedCommentsResolver, NestedCommentsService]
})
export class NestedCommentsModule {}
