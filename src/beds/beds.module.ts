import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersController } from './controllers/users/users.controller';
// import { UsersService } from './services/users/users.service';
import { BedsController } from './controllers/beds.controller';
import { BedsService } from './services/beds.service';
import { Bed } from 'src/typeorm/entities/Bed';
@Module({
  imports: [TypeOrmModule.forFeature([Bed])],
  controllers: [BedsController],
  providers: [BedsService],
})
export class BedsModule {}