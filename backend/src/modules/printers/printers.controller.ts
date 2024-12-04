import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import { PrintersService } from './printers.service'
import { CreatePrinterDTO } from './dto/create-printer.dto'

@Controller('api/printers')
@ApiTags('PRINTERS')
export class PrintersController {
  constructor(private readonly printersService: PrintersService) {}

  @ApiOperation({
    summary: 'Get all printers',
    description: 'Get all printers.',
  })
  @Get()
  async getAllPrinters() {
    return this.printersService.findAll()
  }

  @ApiOperation({
    summary: 'Create printer',
    description: 'Create printer.',
  })
  @ApiBody({ type: CreatePrinterDTO })
  @Post()
  async createPrinter(@Body() printer: CreatePrinterDTO) {
    return this.printersService.create(printer)
  }
}
