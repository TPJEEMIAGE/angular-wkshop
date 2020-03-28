import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("t_user")
export class User {

  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  login : string;

  @Column()
  password : string;

  @Column()
  name : string;

}