import { Injectable } from '@nestjs/common';
import { PrismaService } from './modules/prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(
    private prisma: PrismaService,
  ) { }

  getHello() {
    return { message: 'Hello World!' };
  }

  createTodo(data: { title: string }) {
    return this.prisma.todo.create({
      data: data,
    });
  }

}
