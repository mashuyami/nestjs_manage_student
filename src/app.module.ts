import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './typeorm/entities/Building';
import { BuildingsModule } from './buildings/buildings.module';
import { Room } from './typeorm/entities/Room';
import { Student } from './typeorm/entities/Student';
import { Bed } from './typeorm/entities/Bed';
import { RoomsModule } from './rooms/rooms.module';
import { BedsModule } from './beds/beds.module';
import { StudentsModule } from './students/students.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'manage_student',
      entities: [Building,Room,Student,Bed],
      synchronize: true,
    }),
    BuildingsModule,
    RoomsModule,
    BedsModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
