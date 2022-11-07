import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
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

@ObjectType()
export class NestedComment {
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


  @Field(()=>User)
  @ManyToOne(() => User, (user) => user.nestedComments, {
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field(()=>[User],{nullable:true})
  @ManyToMany(() => User, (user) => user.likeNestedComments, {
    nullable: true,
  })
  @JoinTable()
  likeUsers?: User[];

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, (comment) => comment.nestedComments)
  comment?: Comment;

  @Field(()=> Post)
  @ManyToOne(() => Post, (post) => post.nestedComments,{
    nullable:false
  })
  @JoinColumn()
  post: Post;
}
