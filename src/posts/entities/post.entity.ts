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

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(4, 24)
  isPriority: boolean;

  @Column()
  @Field(() => String)
  @IsEmail()
  @Length(6, 30)
  reports: number;

  views: number;

  @OneToMany(() => Comment, (comment) => comment.post, {
    nullable: true,
  })
  comments?: Comment[];

  @Field()
  @ManyToOne(() => User, (user) => user.posts, {
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @ManyToMany(() => User, (user) => user.agreePosts, {
    nullable: true,
  })
  @JoinTable()
  agreeUsers: User[];

  @Field()
  @ManyToMany(() => User, (user) => user.disagreePosts, {
    nullable: true,
  })
  @JoinTable()
  disagreeUsers: User[];
  // @Field(() => Number)
  // @Column({ name: 'user_id' })
  // userId: number;
}
