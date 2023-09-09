import { IsNotEmpty } from "class-validator";

export class UpdateBedDto {
  @IsNotEmpty()
  viTriGiuong: number;
  @IsNotEmpty()
  trangThai: number;
  }