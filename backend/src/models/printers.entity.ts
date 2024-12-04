// entities/printer.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { PrinterStatus } from './enums/index.enum';
import { SPSO } from './spso.entity';
import { PrinterFile } from './printer-file.entity';

@Entity('Printer')
export class Printer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  model: string;

  @Column({ type: 'enum', enum: PrinterStatus, default: PrinterStatus.ONLINE })
  status: PrinterStatus;

  @Column({ length: 20 })
  campus: string;

  @Column({ length: 20 })
  building: string;

  @Column({ length: 20 })
  room: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToMany(() => SPSO, spso => spso.printers)
  spsos: SPSO[];

  @OneToMany(() => PrinterFile, printerFile => printerFile.printer)
  printerFiles: PrinterFile[];
}
