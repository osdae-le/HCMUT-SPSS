import { Student } from 'src/models/students.entity'
import { BaseAbstractRepostitory } from 'src/repositories/base/base.abstract.repository'

export interface StudentsRepositoryInterface
  extends BaseAbstractRepostitory<Student> {}
