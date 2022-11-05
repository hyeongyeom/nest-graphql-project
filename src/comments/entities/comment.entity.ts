import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Comment {
  

}
