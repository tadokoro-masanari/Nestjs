import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, CommentsModule, TasksModule, PrismaModule, AuthModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
