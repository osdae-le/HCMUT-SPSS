import { Module } from '@nestjs/common'
import { PrintersController } from './printers.controller'
import { PrintersService } from './printers.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Printer } from 'src/models/printers.entity'
import { PrintersRepository } from 'src/repositories/printers.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Printer])],
  controllers: [PrintersController],
  providers: [PrintersService,{
    provide: 'PrintersRepositoryInterface',
    useClass: PrintersRepository,
  }],
  exports: [PrintersService],
})
export class PrintersModule {}
