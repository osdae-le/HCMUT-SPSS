import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { FileType } from 'src/models/enums/index.enum'

export class CreateFileDTO {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  name: string

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  size: number

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  pageNum: number

  @ApiProperty({ enum: FileType })
  @IsNotEmpty()
  fileType: FileType

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  studentId: number
}
