import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Column } from "typeorm";

export abstract class Content {

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({default: false})
  deleted!: boolean

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  @VersionColumn()
  _v!: number
}
