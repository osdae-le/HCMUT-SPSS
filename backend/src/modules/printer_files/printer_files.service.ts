import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrinterFile } from 'src/models/printer-file.entity'
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service'
import { PrinterFilesRepositoryInterface } from './interfaces/printer_files.interface'
import { CreatePrinterFileDTO } from './dto/create-printer-file.dto'
import { FilesService } from '../files/files.service'
import { PrintersService } from '../printers/printers.service'

@Injectable()
export class PrinterFilesService extends BaseServiceAbstract<PrinterFile> {
  constructor(
    @Inject('PrinterFilesRepositoryInterface')
    private readonly printerFilesRepository: PrinterFilesRepositoryInterface,
    private readonly filesService: FilesService,
    private readonly printersService: PrintersService,
  ) {
    super(printerFilesRepository)
  }

  async createNewPrinterFile(printerFile: CreatePrinterFileDTO) {
    const { fileId, printerId } = printerFile

    const file = await this.filesService.findOne(fileId)
    
    if (!file) {
      throw new NotFoundException(`File with id ${fileId} not found`)
    }

    const printer = await this.printersService.findOne(printerId)

    if (!printer) {
      throw new NotFoundException(`Printer with id ${printerId} not found`)
    }

    return this.printerFilesRepository.save(printerFile)
  }
}
