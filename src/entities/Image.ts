import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import {Association} from "./Association";

@Entity("images")// nome da tabela
class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @CreateDateColumn()
  created_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @ManyToOne(() => Association, (association) => association.imagesPath, {onDelete:'CASCADE',onUpdate:'CASCADE' })
  @JoinColumn({ name: "association_id" })
  association: Association; 
}

export {Image}