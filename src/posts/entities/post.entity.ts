import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostCategory } from '../enums/post-category.enum';
import { IsEnum } from 'class-validator';
import { NestedComment } from 'src/nested-comments/entities/nested-comment.entity';

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column({ type: 'enum', enum: PostCategory})
  @Field(() => PostCategory)
  @IsEnum(PostCategory)
  category?: PostCategory;

  @Column()
  @Field(() => Boolean)
  isPriority: boolean;

  @Column()
  @Field(() => String)
  agreeContents: string;

  @Column()
  @Field(() => String)
  disagreeContents: string;

  @Column()
  @Field(() => Int)
  agreeNum: number;
  
  @Column()
  @Field(() => Int)
  disagreeNum: number;
  
  @Column()
  @Field(() => Int)
  views: number;

  /**
   * relation field
   */

  @Field(()=>User)
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field(()=> [Comment], { nullable: true })
  @OneToMany(() => Comment, (comment) => comment.post)
  comments?: Comment[];

  @Field(()=>[User], { nullable: true })
  @ManyToMany(() => User, (user) => user.agreePosts)
  @JoinTable()
  agreeUsers?: User[];

  @Field(()=>[User], { nullable: true })
  @ManyToMany(() => User, (user) => user.disagreePosts)
  @JoinTable()
  disagreeUsers?: User[];

  @Field(()=>[User],{ nullable: true })
  @ManyToMany(() => User, (user) => user.likePosts)
  @JoinTable()
  likeUsers?:User[];

  @Field(() => [NestedComment], { nullable: true })
  @OneToMany(() => NestedComment, (nestedComment) => nestedComment.post)
  nestedComments?: NestedComment[];


}
