import { Printer } from 'src/models/printers.entity'
import { BaseAbstractRepostitory } from 'src/repositories/base/base.abstract.repository'

export interface PrintersRepositoryInterface
  extends BaseAbstractRepostitory<Printer> {}
