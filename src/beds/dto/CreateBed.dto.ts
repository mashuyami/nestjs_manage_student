import { IsNotEmpty, IsString } from "class-validator";

export class CreateBedDto {
  @IsNotEmpty()
  viTriGiuong: number;
  @IsNotEmpty()
  trangThai: number;
  }