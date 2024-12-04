// entities/spso.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Printer } from './printers.entity';

@Entity('SPSO')
export class SPSO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @ManyToMany(() => Printer, printer => printer.spsos)
  @JoinTable({
    name: 'PrinterSPSO',
    joinColumn: { name: 'spso_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'printer_id', referencedColumnName: 'id' },
  })
  printers: Printer[];
}
