import { ObjectType, Field, Int } from '@nestjs/graphql';
import { NestedComment } from 'src/nested-comments/entities/nested-comment.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field(() => String)
  @Column()
  content:string;

  @Field(() => Boolean)
  @Column()
  isAgree:boolean;

  @Field(() => Boolean)
  @Column('boolean', {default: false})
  isBlocked:boolean=false;

  @Field(() => String,{ nullable: true })
  @Column()
  blockReason:string;

  @Field(() => Boolean,{ nullable: true })
  @Column('boolean', {default: false})
  isNested:boolean=false;

  @Field(() => Int)
  @Column()
  liked:number;


   /**
   * relation field
   */

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
