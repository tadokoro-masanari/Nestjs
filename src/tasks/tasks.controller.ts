import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

//swaggerでの表示に使用
@ApiTags('tasks')
//認証済みのみアクセスできる
@UseGuards(AuthGuard('jwt'))
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //新規作成
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  //全件取得
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  //指定したIDのタスク情報を取得
  @Get(':id')
  findOne(@Param('id') id: number) {
    const task_id = Number(id)
    const found = this.tasksService.findOne(task_id);
    return found;
  }

  //キーワードがnameに含まれてるタスクを全て出す。
  @Get('/search/:key/title')
  select_title(@Param('key') key: string) {
    const found = this.tasksService.select_title(key);
    return found;
  }

  //user_idで絞り込み
  @Get('/search/:id/user_id')
  select_user_id(@Param('id') user_id: number) {
    const found = this.tasksService.selact_user_id(user_id);  
    return found;
  }

  //期限超過したタスク一覧
  @Get('/search/:date/deadline')
  deadline(@Param('date') date: string) {
    return this.tasksService.deadline(date);
  }

  //指定したIDのタスク情報を更新する
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  //指定したIDの情報を削除
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksService.remove(+id);
  }
}

