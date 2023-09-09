import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Post('todos/create')
  createTodo(@Body() data: { title: string }) {
    return this.appService.createTodo(data);
  }

}
