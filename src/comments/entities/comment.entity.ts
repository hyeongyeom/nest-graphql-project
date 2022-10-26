import { ObjectType, Field, Int } from '@nestjs/graphql';
import { NestedComment } from 'src/nested-comments/entities/nested-comment.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  content: string;

  @Field()
  @ManyToOne(() => User, (user) => user.comments, {
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @ManyToOne(() => Post, (post) => post.comments, {
    nullable: true,
  })
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @Field()
  @ManyToMany(() => User, (user) => user.likeComments, {
    nullable: true,
  })
  @JoinTable()
  likeUsers: User[];

  @Field()
  @ManyToOne(() => NestedComment, (nestedComment) => nestedComment.comment, {
    nullable: true,
  })
  @JoinColumn({ name: 'nestedComment_id' })
  nestedComments: NestedComment[];
}
