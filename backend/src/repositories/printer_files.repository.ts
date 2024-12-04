import { PrinterFile } from 'src/models/printer-file.entity'
import { BaseAbstractRepostitory } from './base/base.abstract.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PrinterFilesRepositoryInterface } from 'src/modules/printer_files/interfaces/printer_files.interface'

export class PrinterFilesRepository
  extends BaseAbstractRepostitory<PrinterFile>
  implements PrinterFilesRepositoryInterface
{
  constructor(
    @InjectRepository(PrinterFile)
    private readonly printerFilesRepository: Repository<PrinterFile>,
  ) {
    super(printerFilesRepository)
  }
}
