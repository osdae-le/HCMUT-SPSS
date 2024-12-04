import { BaseDTO } from 'src/common/base.dto'
import { PrinterFile } from 'src/models/printer-file.entity'
import { FindAllResponse } from 'src/types/common.type'

export class PrinterFileResponseDTO extends BaseDTO {
  data: PrinterFile | FindAllResponse<PrinterFile>
}
