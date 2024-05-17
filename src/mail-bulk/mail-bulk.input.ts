import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class sendAccountVerificationInput {
  @IsString()
  subject:'Thanh toan thanh cong!';

  @IsString()
  email:string;

  @IsString()
  name:string;

  @IsNumber()
  cost:number;
}
