// entities/file.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'
import { FileType } from './enums/index.enum'
import { Student } from './students.entity'
import { PrinterFile } from './printer-file.entity'

@Entity('File')
export class File {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 400})
  name: string

  @Column()
  size: number

  @Column()
  pageNum: number

  @Column({
    type: 'enum',
    enum: FileType,
  })
  fileType: FileType

  @ManyToOne(() => Student, (student) => student.files, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'studentId' })
  student: Student

  @Column({
    name: 'studentId',
    nullable: true,
  })
  studentId: number

  @OneToMany(() => PrinterFile, (printerFile) => printerFile.file)
  printerFiles: PrinterFile[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}
