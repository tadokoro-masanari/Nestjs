import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Logger, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '@prisma/client';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //ログインしているユーザーの情報
  @Get()
  getLoginUser(@Req() req: Request): Omit<User, 'password'> {
    return req.user;
  }

  //ログインしているユーザーの情報を変更する
  @Patch('/update')
  @HttpCode(HttpStatus.OK)
  updateUser(
    @Req() req: Request,
    @Body() dto: UpdateUserDto,
    ): Promise<Omit<User, 'password'>> {
    return this.usersService.updateUser(req.user.id, dto);
  }

  //指定したIDのユーザーを削除する
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
