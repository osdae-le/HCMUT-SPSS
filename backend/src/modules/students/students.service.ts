import { Inject, Injectable } from '@nestjs/common'
import { Student } from 'src/models/students.entity'
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service'
import { StudentsRepositoryInterface } from './interfaces/students.interface'
import { DataSource, DeepPartial } from 'typeorm'
import { FilesService } from '../files/files.service'
import { File } from 'src/models/files.entity'
import { GoogleAuthService } from '../google-auth/google-auth.service'
import { CreateStudentDTO } from './dto/create-user.dto'

@Injectable()
export class StudentsService extends BaseServiceAbstract<Student> {
  constructor(
    @Inject('StudentsRepositoryInterface')
    private readonly students_repository: StudentsRepositoryInterface,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
    private readonly googleAuthService: GoogleAuthService,
  ) {
    super(students_repository)
  }

  async getStudentFiles(studentId: number) {
    return this.filesService.findAll({ where: { studentId: studentId } })
  }

  async getStudentPrinterHistory(studentId: number) {
    return this.dataSource
      .createQueryBuilder()
      .select(['file.studentId', 'file.id', 'file.name','file.fileType']) // Use array format for multiple fields
      .from(File, 'file')
      .where('file.studentId = :studentId', { studentId })
      .innerJoinAndSelect('file.printerFiles', 'printerFile') // Join File with PrinterFile
      .getMany()
  }

  async getStudentByGoogleToken(token: string) {
    const payload = await this.googleAuthService.verifyToken(token)
    const firstName = payload.given_name
    const lastName = payload.family_name
    const email = payload.email

    console.log('payload', payload)

    const student = await this.students_repository.findOne({ where: { email } })


    if (student) {
      return student
    }

    const studentDTO = new CreateStudentDTO()
    
    studentDTO.firstName = firstName
    studentDTO.lastName = lastName
    studentDTO.email = email

    return await this.students_repository.save(studentDTO)
  }
}
