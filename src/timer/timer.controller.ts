import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TimerService } from './timer.service';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { CurrentUser } from 'src/auth/decorator/user.decorator';
import { TimerDto } from './timer.dto';

@Controller('user/timer')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.timerService.getAll(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: TimerDto, @CurrentUser('id') userId: string) {
    return this.timerService.create(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: TimerDto, @CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.timerService.update(dto, id,userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.timerService.delete(id)
  }
}
