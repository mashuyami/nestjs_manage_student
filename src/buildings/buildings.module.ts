import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from 'src/typeorm/entities/Building';
// import { UsersController } from './controllers/users/users.controller';
// import { UsersService } from './services/users/users.service';
import { BuildingsController } from './controllers/buildings.controller';
import { BuildingsService } from './services/buildings.service';
@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  controllers: [BuildingsController],
  providers: [BuildingsService],
})
export class BuildingsModule {}