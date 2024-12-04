import { Module } from '@nestjs/common'
import { PrinterFilesController } from './printer_files.controller'
import { PrinterFilesService } from './printer_files.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PrinterFile } from 'src/models/printer-file.entity'
import { PrinterFilesRepository } from 'src/repositories/printer_files.repository'
import { FilesModule } from '../files/files.module'
import { PrintersModule } from '../printers/printers.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([PrinterFile]),
    FilesModule,
    PrintersModule,
  ],
  controllers: [PrinterFilesController],
  providers: [
    PrinterFilesService,
    {
      provide: 'PrinterFilesRepositoryInterface',
      useClass: PrinterFilesRepository,
    },
  ],
  exports: [PrinterFilesService],
})
export class PrinterFilesModule {}
