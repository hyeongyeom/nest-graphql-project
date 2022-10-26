import { Post } from '../../posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NestedComment } from 'src/nested-comments/entities/nested-comment.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(4, 24)
  nickname: string;

  @Column()
  @Field(() => String)
  @IsEmail()
  @Length(6, 30)
  email: string;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(6, 24)
  @Exclude()
  password: string;

  @Column()
  @Field(() => String)
  garde;

  // @Column()
  // @Field(() => String)
  // avatar

  @Column()
  @Field(() => String)
  role?: string;

  /**
   * relation field
   */

  @OneToMany(() => Post, (post) => post.user)
  @Field(() => [Post])
  posts?: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  @Field((type) => [Comment], { nullable: true })
  comments?: Comment[];

  @ManyToMany(() => Comment, (comment) => comment.user)
  likeComments: Comment[];

  @ManyToMany(() => Post, (post) => post.agreeUsers)
  agreePosts: Post[];

  @ManyToMany(() => Post, (post) => post.disagreeUsers)
  disagreePosts: Post[];

  @OneToMany(() => NestedComment, (nestedComment) => nestedComment.user)
  @Field((type) => [NestedComment], { nullable: true })
  nestedComments?: NestedComment[];

  @ManyToMany(() => NestedComment, (nestedComment) => nestedComment.likeUsers)
  likeNestedComments?: NestedComment[];

  // @Field(() => [Vote] {
  //   description:'투표참여 글',
  //   nullable:true
  // })

  // @ManyToMany(()=> Vote,(vote) => vote.user,{
  //   nullable:true
  // })
  // vote?:Vote[];

  // @Column()
  // @Field(() => String)
  // likePosts
}
