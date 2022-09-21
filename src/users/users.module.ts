import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { ConfigService } from "@nestjs/config";
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[PrismaModule,JwtModule],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy, ConfigService, PrismaService],
})
export class UsersModule {}
