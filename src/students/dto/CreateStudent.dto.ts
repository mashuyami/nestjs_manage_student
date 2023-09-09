import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
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