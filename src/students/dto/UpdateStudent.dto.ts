import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './CreateStudent.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsString()
  avatar: string;
  @IsString()
  @IsNotEmpty()
  soDienThoai: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  hoTen: string;
}
