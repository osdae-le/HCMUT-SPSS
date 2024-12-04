import { Test, TestingModule } from '@nestjs/testing'
import { PrinterFilesController } from './printer_files.controller'

describe('PrinterFilesController', () => {
  let controller: PrinterFilesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrinterFilesController],
    }).compile()

    controller = module.get<PrinterFilesController>(PrinterFilesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
