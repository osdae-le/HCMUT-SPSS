import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'
import {
  Orientation,
  PageSize,
  PrintSide,
  PrintType,
} from 'src/models/enums/index.enum'

export class CreatePrinterFileDTO {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  pagePerSide: number

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  startPage: number

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  endPage: number

  @ApiProperty({ enum: Orientation })
  @IsNotEmpty()
  orientation: Orientation

  @ApiProperty({ enum: PageSize })
  @IsNotEmpty()
  pageSize: PageSize

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  copies: number

  @ApiProperty({ enum: PrintType })
  @IsNotEmpty()
  printType: PrintType

  @ApiProperty({ enum: PrintSide })
  @IsNotEmpty()
  printSide: PrintSide

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  fileId: number

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  printerId: number

  @ApiProperty({ type: [Number] })
  @IsOptional()
  customPageRanges?: number[]
}
