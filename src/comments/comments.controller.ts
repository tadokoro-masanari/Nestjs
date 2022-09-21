import { Controller, Get, Post, Body, Patch, Param, UseGuards,Delete, HttpStatus, HttpCode, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('comments')
@UseGuards(AuthGuard('jwt'))
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  //新規作成
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  //全件取得
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  //指定したIDのタスク情報を取得
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  //user_idで絞り込み
  @Get('/search/:user_id/user_id')
  select_user_id(@Param('user_id') user_id: number) {
    const found = this.commentsService.select_user_id(user_id);
    return found;
  }

  //task_idで絞り込み
  @Get('/search/:task_id/task_id')
  select_task_id(@Param('task_id') task_id: number) {
    const found = this.commentsService.select_task_id(task_id);
    console.error(found)
    return found;
  }

  //指定したIDのタスク情報を更新する
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  //指定したIDの情報を削除
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
