import { IsNotEmpty } from "class-validator";

export class UpdateRoomDto {
  @IsNotEmpty()
  tenPhong: string;
  @IsNotEmpty()
  viTriTang: number;
  @IsNotEmpty()
  soNguoiToiDa: number;
  @IsNotEmpty()
  gioiTinhSV: string;
  }