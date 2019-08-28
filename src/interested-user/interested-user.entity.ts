import { Injectable } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class InterestedUser {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  firstName: string;

  @Field(type => String)
  @Column()
  lastName: string;

  @Field(type => String)
  @Column()
  email: string;

  @Field(type => Boolean)
  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  verificationCode: string;
}
