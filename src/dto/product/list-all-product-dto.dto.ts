import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from "class-validator";

export class listAllProductDto {
  @ApiProperty({ default: 1, required: true })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(1)
  page: number;

  @ApiProperty({ default: 10, required: true })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;
}
export class getDetailProductDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  ProductId: number;
}

export class categoryDto {
  @ApiProperty({ required: true })
  @Type(() => String)
  @IsString()
  category: string;

}

export class typeDto {
  @ApiProperty({ required: true })
  @Type(() => String)
  @IsString()
  type: string;

}

export class brandDto {
  @ApiProperty({ required: true })
  @Type(() => String)
  @IsString()
  brand: string;

}

export class priceDto {
  @ApiProperty({ required: true })
  @Type(() => Number)
  @IsNumber()
  price: number;

}


export class filterProductDto {
  @ApiProperty({ default: 1, required: true })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(1)
  page: number;

  @ApiProperty({ default: 10, required: true })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search: string;

  @ApiProperty({ type: [categoryDto] })
  @IsArray()
  @ValidateNested({ each: true })
  category: categoryDto[];

  @ApiProperty({ type: [typeDto] })
  @IsArray()
  @ValidateNested({ each: true })
  type: typeDto[];

  @ApiProperty({ type: [brandDto] })
  @IsArray()
  @ValidateNested({ each: true })
  brand: brandDto[];

  // @ApiProperty({ type: [priceDto] })
  // @IsArray()
  // @ValidateNested({ each: true })
  // prices: priceDto[];
}
