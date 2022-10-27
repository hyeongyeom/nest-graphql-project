import { Field, GraphQLISODateTime } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Content {
  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    precision: 3,
  })
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    precision: 3,
  })
  updatedAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    precision: 3,
    nullable: true,
  })
  deletedAt?: Date;
}
