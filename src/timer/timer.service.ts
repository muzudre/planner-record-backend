import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TimerService {
  constructor(private prisma: PrismaService) {}

  async getTodaySession(userId: string) {
    const today = new Date().toISOString().split('T')[0]

    return this.prisma.timerSession.findFirst({
      where: {
        createAt: {
          gte: new Date(today)
        },
        userId
      },
      include: {
        rounds: {
          orderBy: {
            id: 'desc'
          }
        }
      }
    })
  }
}