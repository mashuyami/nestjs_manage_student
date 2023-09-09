import { IsNotEmpty } from "class-validator";

export class UpdateBuildingDto {
  @IsNotEmpty()
    tenToaNha: string;
    @IsNotEmpty()
    soTang: number;
  }