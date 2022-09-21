import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaModule,JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersModule, PrismaService],
})
export class AuthModule {}
