import { InjectRepository } from '@nestjs/typeorm'
import { BaseAbstractRepostitory } from './base/base.abstract.repository'
import { Student } from 'src/models/students.entity'
import { Repository } from 'typeorm'
import { StudentsRepositoryInterface } from 'src/modules/students/interfaces/students.interface'

export class StudentsRepository
  extends BaseAbstractRepostitory<Student>
  implements StudentsRepositoryInterface
{
  constructor(
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
  ) {
    super(studentRepository)
  }
}
