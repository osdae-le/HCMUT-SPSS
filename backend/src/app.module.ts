import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import ormconfig from './database/ormconfig'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentsModule } from './modules/students/students.module'
import { PrintersModule } from './modules/printers/printers.module'
import { AwsModule } from './modules/aws/aws.module'
import { FilesModule } from './modules/files/files.module'
import { PrinterFilesModule } from './modules/printer_files/printer_files.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    FilesModule,
    AwsModule,
    StudentsModule,
    PrintersModule,    
    PrinterFilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
