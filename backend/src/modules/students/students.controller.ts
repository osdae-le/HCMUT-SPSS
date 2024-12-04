import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { StudentsService } from './students.service'
import { CreateStudentDTO } from './dto/create-user.dto'
import { GoogleAuthDTO } from './dto/google-auth.dto'

@ApiTags('STUDENTS')
@Controller('api/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({
    summary: 'Get all students',
    description: 'Get all students.',
  })
  @Get()
  async getAllUsers() {
    return this.studentsService.findAll()
  }

  @ApiOperation({
    summary: 'Get student files',
    description: 'Get student files.',
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id/files')
  async getStudentFiles(@Param('id') id: number) {
    return this.studentsService.getStudentFiles(id)
  }

  @ApiOperation({
    summary: 'Get student printer history',
    description: 'Get student printer history.',
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id/printer-history')
  async getStudentPrinterHistory(@Param('id') id: number) {
    return this.studentsService.getStudentPrinterHistory(id)
  }

  @ApiOperation({
    summary: 'Get student by id',
    description: 'Get student by id.',
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  async getStudentById(@Param('id') id: number) {
    return this.studentsService.findOne(id)
  }

  @ApiOperation({
    summary: 'Get student by google token',
    description: 'Get student by google token.',
  })
  @ApiBody({ type: GoogleAuthDTO })
  @Post('google-auth')
  async getStudentByGoogleToken(@Body() { token }: GoogleAuthDTO) {
    return this.studentsService.getStudentByGoogleToken(token)
  }

  @ApiOperation({
    summary: 'Create student',
    description: 'Create student.',
  })
  @ApiBody({ type: CreateStudentDTO })
  @Post()
  async createUser(@Body() user: CreateStudentDTO) {
    return this.studentsService.create(user)
  }

  
}
