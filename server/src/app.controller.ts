import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response, @Req() req: Request): Response {
    return res.status(200).json(this.appService.getHello());
  }
}
