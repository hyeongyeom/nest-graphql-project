import { Post } from '../../posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { IsEmail, IsEnum, IsNumber, IsString, Length } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NestedComment } from 'src/nested-comments/entities/nested-comment.entity';
import { UserRole } from '../enums/user-role.enum';
import { Content } from 'src/common/date.entity';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity({ name: 'users' })
export class User extends Content {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Int, { description: '유저에게 공개되는 아이디' })
  @Column({ name: 'public_id', unique: true })
  @IsNumber()
  publicId: number;

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

  @Column({ type: 'enum', enum: UserRole, default: UserRole.User })
  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  /**
   * relation field
   */

  @OneToMany(() => Post, (post) => post.user)
  @Field(() => [Post])
  posts?: Post[];

  @ManyToMany(() => Post, (post) => post.agreeUsers)
  agreePosts: Post[];

  @ManyToMany(() => Post, (post) => post.disagreeUsers)
  disagreePosts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @ManyToMany(() => Comment, (comment) => comment.user)
  likeComments: Comment[];

  @OneToMany(() => NestedComment, (nestedComment) => nestedComment.user)
  @Field(() => [NestedComment], { nullable: true })
  nestedComments?: NestedComment[];

  @ManyToMany(() => NestedComment, (nestedComment) => nestedComment.likeUsers)
  likeNestedComments?: NestedComment[];
}
