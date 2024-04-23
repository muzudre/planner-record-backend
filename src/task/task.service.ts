import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  getById(id: string){
    return this.prisma.task.findUnique({
      where:{
        id
      },
      include: {
        tasks: true
      }
    })
  }

  async create(dto: TaskDto){

    return this.prisma.task.create({
      data: dto
    })
  }

  async update(id: string, dto: TaskDto){
  }
}