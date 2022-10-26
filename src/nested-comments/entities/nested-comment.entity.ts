import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
export class NestedComment {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field()
  @ManyToOne(() => User, (user) => user.nestedComments, {
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @ManyToMany(() => User, (user) => user.likeNestedComments, {
    nullable: true,
  })
  @JoinTable()
  likeUsers?: User[];

  @OneToMany(() => Comment, (comment) => comment.nestedComments)
  @Field(() => [Comment], { nullable: true })
  comment: Comment;
}
