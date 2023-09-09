import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { CreateRoomDto } from '../dto/CreateRoom.dto';
  import { UpdateRoomDto } from '../dto/UpdateRoom.dto';
import { RoomsService } from '../services/rooms.service';
  @Controller('Rooms')
  export class RoomsController {
    constructor(private roomservice: RoomsService) {}
    @Get()
    getRooms() {
      return this.roomservice.findRooms();
    }
  
    @Get('search')
    searchRooms(@Query('query') query: string) {
      return this.roomservice.searchRooms(query);
    }
  
    @Post()
    createRoom(@Body() createRoomDto: CreateRoomDto) {
      return this.roomservice.createRoom(createRoomDto);
    }
  
    @Put(':id')
    async updateRoomById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateRoomDto: UpdateRoomDto,
    ) {
      await this.roomservice.updateRoom(id, updateRoomDto);
    }
  
    @Delete(':id')
    async deleteRoomById(@Param('id', ParseIntPipe) id: number) {
      await this.roomservice.deleteRoom(id);
    }
  
  }