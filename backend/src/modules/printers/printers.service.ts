import { Inject, Injectable } from '@nestjs/common'
import { Printer } from 'src/models/printers.entity'
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service'
import { PrintersRepositoryInterface } from './interfaces/printers.interface'

@Injectable()
export class PrintersService extends BaseServiceAbstract<Printer> {
  constructor(
    @Inject('PrintersRepositoryInterface')
    private readonly printers_repository: PrintersRepositoryInterface,
  ) {
    super(printers_repository)
  }

  async createNewPrinter(printer: Printer): Promise<Printer> {
    return await this.printers_repository.create(printer)
  }
}
