import { File } from 'src/models/files.entity'
import { BaseAbstractRepostitory } from 'src/repositories/base/base.abstract.repository'

export interface FilesRepositoryInterface
  extends BaseAbstractRepostitory<File> {}
