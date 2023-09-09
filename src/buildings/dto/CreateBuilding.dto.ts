import { IsNotEmpty } from "class-validator";

export class CreateBuildingDto {
  @IsNotEmpty()
    tenToaNha: string;
    @IsNotEmpty()
    soTang: number;
  }