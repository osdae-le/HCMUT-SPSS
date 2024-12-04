import { forwardRef, Module } from '@nestjs/common'
import { FilesController } from './files.controller'
import { FilesService } from './files.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { File } from 'src/models/files.entity'
import { FilesRepository } from 'src/repositories/files.repository'
import { StudentsModule } from '../students/students.module'
import { StudentsService } from '../students/students.service'
import { Student } from 'src/models/students.entity'

@Module({
  imports: [TypeOrmModule.forFeature([File]), forwardRef(() => StudentsModule)],
  controllers: [FilesController],
  providers: [
    FilesService,
    {
      provide: 'FilesRepositoryInterface',
      useClass: FilesRepository,
    },
  ],
  exports: [FilesService],
})
export class FilesModule {}
