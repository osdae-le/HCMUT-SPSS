import { Test, TestingModule } from '@nestjs/testing'
import { PrinterFilesService } from './printer_files.service'

describe('PrinterFilesService', () => {
  let service: PrinterFilesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrinterFilesService],
    }).compile()

    service = module.get<PrinterFilesService>(PrinterFilesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
