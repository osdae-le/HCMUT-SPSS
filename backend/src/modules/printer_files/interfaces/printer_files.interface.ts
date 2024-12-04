import { PrinterFile } from 'src/models/printer-file.entity'
import { BaseAbstractRepostitory } from 'src/repositories/base/base.abstract.repository'

export interface PrinterFilesRepositoryInterface
  extends BaseAbstractRepostitory<PrinterFile> {}
