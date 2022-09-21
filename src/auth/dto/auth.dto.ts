import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString ()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString ()
    password: string;

    @IsNotEmpty()
    @IsBoolean()
    stop_flag?: boolean = false;

}
