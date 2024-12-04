// entities/transaction.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TransactionStatus } from './enums/index.enum';
import { Student } from './students.entity';

@Entity('Transaction')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: TransactionStatus })
  status: TransactionStatus;

  @Column()
  amount: number;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => Student, student => student.transactions)
  student: Student;
}
