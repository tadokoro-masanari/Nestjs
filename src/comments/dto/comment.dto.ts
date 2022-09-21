import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    task_id: number;

    @IsString()
    @IsNotEmpty()
    content: string;
}

export class  UpdateCommentDto {

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    task_id: number;

    @IsString()
    @IsNotEmpty()
    content: string;
}