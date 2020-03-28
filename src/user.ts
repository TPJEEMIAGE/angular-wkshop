import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("t_user")
export class User extends BaseEntity{

  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  login : string;

  @Column()
  password : string;

  @Column()
  name : string;

}