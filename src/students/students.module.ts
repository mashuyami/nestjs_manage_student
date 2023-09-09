import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './controllers/Students.controller';
import { StudentsService } from './services/Students.service';
import { Student } from 'src/typeorm/entities/Student';
import { Room } from 'src/typeorm/entities/Room';
import { Bed } from 'src/typeorm/entities/Bed';
import { Building } from 'src/typeorm/entities/Building';
@Module({
  imports: [TypeOrmModule.forFeature([Student,Room,Bed,Building])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
