import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GoogleAuthDTO {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  token: string
}
