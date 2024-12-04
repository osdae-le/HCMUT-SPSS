import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateStudentDTO {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  firstName: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  lastName: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  email: string
}
