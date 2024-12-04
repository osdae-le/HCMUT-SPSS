import { File } from 'src/models/files.entity'
import { BaseAbstractRepostitory } from './base/base.abstract.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FilesRepositoryInterface } from 'src/modules/files/interfaces/files.interface'

export class FilesRepository
  extends BaseAbstractRepostitory<File>
  implements FilesRepositoryInterface
{
  constructor(
    @InjectRepository(File) private readonly fileRepository: Repository<File>,
  ) {
    super(fileRepository)
  }
}
