// entities/printer-file.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Orientation } from './enums/index.enum'
import { PageSize } from './enums/index.enum'
import { PrintType } from './enums/index.enum'
import { PrintSide } from './enums/index.enum'
import { PrinterFileStatus } from './enums/index.enum'
import { File } from './files.entity'
import { Printer } from './printers.entity'

@Entity('PrinterFile')
export class PrinterFile {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  pagePerSide: number

  @Column()
  startPage: number

  @Column()
  endPage: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'enum', enum: Orientation })
  orientation: Orientation

  @Column({ type: 'enum', enum: PageSize })
  pageSize: PageSize

  @Column()
  copies: number

  @Column({ type: 'enum', enum: PrintType })
  printType: PrintType

  @Column({ type: 'enum', enum: PrintSide })
  printSide: PrintSide

  @ManyToOne(() => File, (file) => file.printerFiles, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'fileId' })
  file: File

  @Column({
    name: 'fileId',
    nullable: true,
  })
  fileId: number

  @ManyToOne(() => Printer, (printer) => printer.printerFiles, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'printerId' })
  printer: Printer

  @Column({
    name: 'printerId',
    nullable: true,
  })
  printerId: number

  @Column({
    type: 'enum',
    enum: PrinterFileStatus,
    default: PrinterFileStatus.QUEUE,
  })
  status: PrinterFileStatus

  @Column("int", { array: true, nullable: true })
  customPageRanges: number[]

}
