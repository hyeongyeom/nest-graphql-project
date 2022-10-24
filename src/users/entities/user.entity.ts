import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vote } from './../../votes/entities/vote.entity';

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
  nickname: string

  @Column()
  @Field(() => String)
  @IsEmail()
  @Length(6,30)
  email:string;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(6, 24)
  @Exclude()
  password: string

  // @Column()
  // @Field(() => String)
  // avatar

  @Column()
  @Field(() => String)
  role?:string

  @OneToMany(()=> Comment,(commnet) => comment.user)
  @Field((type) => [User],{nullable:true})
  likeComments?:Comment[];

  @Field(() => [Vote] {
    description:'투표참여 글',
    nullable:true
  })
  
  @ManyToMany(()=> Vote,(vote) => vote.user,{
    nullable:true
  }) 
  vote?:Vote[];

  @Column()
  @Field(() => String)
  likePosts

  @Column()
  @Field(() => String)
  garde
}
