import { forwardRef, Module } from '@nestjs/common'
import { StudentsController } from './students.controller'
import { StudentsService } from './students.service'
import { StudentsRepository } from 'src/repositories/students.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Student } from 'src/models/students.entity'
import { FilesModule } from '../files/files.module'
import { GoogleAuthModule } from '../google-auth/google-auth.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    forwardRef(() => FilesModule),
    GoogleAuthModule,
  ],
  controllers: [StudentsController],
  providers: [
    StudentsService,
    {
      provide: 'StudentsRepositoryInterface',
      useClass: StudentsRepository,
    },
  ],
  exports: [StudentsService],
})
export class StudentsModule {}
