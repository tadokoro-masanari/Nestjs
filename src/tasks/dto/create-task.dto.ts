import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    user_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    image_url: string;

    @IsDateString()
    dead_line: Date;
}