import { ConflictException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common'
import { File } from 'src/models/files.entity'
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service'
import { FilesRepositoryInterface } from './interfaces/files.interface'
import { CreateFileDTO } from './dto/create-file.dto'
import { StudentsService } from '../students/students.service'

@Injectable()
export class FilesService extends BaseServiceAbstract<File> {
  constructor(
    @Inject('FilesRepositoryInterface')
    private readonly files_repository: FilesRepositoryInterface,
    @Inject(forwardRef(() => StudentsService))
    private readonly studentsService: StudentsService,
  ) {
    super(files_repository)
  }

  async createNewFile(fileDto: CreateFileDTO): Promise<File> {
    const studentId = fileDto.studentId

    const student = await this.studentsService.findOne(studentId)

    if (!student) {
      throw new NotFoundException(`Student with id ${studentId} not found`)
    }

    // Check filename uniqueness
    const file = await this.files_repository.findOne({
      where: { name: fileDto.name, student: student },
    })

    if (file) {
      throw new ConflictException(
        `File with name ${fileDto.name} already exists for student with id ${studentId}`,
      )
    }

    return await this.files_repository.save(fileDto)
  }
}
