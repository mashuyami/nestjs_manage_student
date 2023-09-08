import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/typeorm/entities/Room';
// import { UsersController } from './controllers/users/users.controller';
// import { UsersService } from './services/users/users.service';
import { RoomsController } from './controllers/rooms.controller';
import { RoomsService } from './services/rooms.service';
@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}