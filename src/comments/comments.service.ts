import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({ data: createCommentDto })
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  select_user_id(user_id: number) {
    const id = Number(user_id);
    return this.prisma.comment.findMany({
      where: { user_id:id}
    })
  }

  async select_task_id(task_id: number) {
    const id =  Number(task_id);
    const taskData = await this.prisma.comment.findMany({
      where: {task_id:id}
    })
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
