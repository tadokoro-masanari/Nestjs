import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    create(createTaskDto: CreateTaskDto) {
        return this.prisma.task.create({ data: createTaskDto} );
    }

    findAll() {
        return this.prisma.task.findMany();
    }

    findOne(id: number) {
        return this.prisma.task.findUnique({ where: { id } });
    }

    async select_title(key: string) {
        return await this.prisma.task.findMany({
             where: {name: { contains:key } } 
            });
    }

    async selact_user_id(user_id: number) {
        const id = Number(user_id);
        return await this.prisma.task.findMany({
            where: { user_id:id }
        });
    }

    async deadline(date: string){
        return await this.prisma.task.findMany({
            where: { dead_line: new Date(date) }
        });

    }

    update(id: number, updateTaskDto:UpdateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data: updateTaskDto
        });
    }

    remove(id: number) {
        return this.prisma.task.delete({ where: { id } });
    }
}

