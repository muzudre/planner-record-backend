import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TimeBlockDto } from './dto/time-block.dto';

@Injectable()
export class TimeBlockService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string) {
    return this.prisma.timeBlock.findMany({
      where: {
        userId
      }
    })
  }

  async create(dto: TimeBlockDto, userId: string) {
    return this.prisma.timeBlock.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

  async update(dto: Partial<TimeBlockDto>, timeBlockId: string, userId: string) {
    return this.prisma.timeBlock.update({
      where: {
        userId,
        id: timeBlockId
      },
      data: dto
    })
  }

  async delete(timeBlockId: string) {
    return this.prisma.timeBlock.delete({
      where: {
        id: timeBlockId
      }
    })
  }
}