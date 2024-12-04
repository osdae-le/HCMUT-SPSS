import { BaseDTO } from 'src/common/base.dto'
import { File } from 'src/models/files.entity'
import { FindAllResponse } from 'src/types/common.type'

export class FileResponseDTO extends BaseDTO {
  data: File | FindAllResponse<File>
}
