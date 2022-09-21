import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
) {}


  findOne(id: number) {
    return this.prisma.user.findUnique( {where: { id } });
  }

  async updateUser(
    id: number, 
    dto: UpdateUserDto
    ): Promise<Omit<User, 'password'>> {

    const user = await this.prisma.user.update({
      where: { id },
      data: { ...dto },
    });
    delete user.password;
    return user;
  }

  remove(id: number) {
    return this.prisma.user.delete({  where: { id } });
  }
}
