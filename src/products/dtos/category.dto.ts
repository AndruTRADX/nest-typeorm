import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `Categorie's name` })
  readonly name: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly productsIds: number[];
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
