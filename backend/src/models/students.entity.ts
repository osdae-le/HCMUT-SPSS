// entities/student.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { File } from './files.entity';
import { Transaction } from './transaction.entity';

@Entity('Student')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({default: 0})
  balance: number;

  @Column({ length: 50 })
  email: string;

  @OneToMany(() => File, file => file.student)
  files: File[];

  @OneToMany(() => Transaction, transaction => transaction.student)
  transactions: Transaction[];
}
