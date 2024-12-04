import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreatePrinterDTO {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  name: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  model: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  campus: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  building: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  room: string
}
