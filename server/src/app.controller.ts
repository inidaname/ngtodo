import { Controller, Get, Res, Req, Inject } from '@nestjs/common';
import { Response, Request } from 'express';
import { Observable } from 'rxjs';

@Controller()
export class AppController {

  @Get()
  getHello(@Res() res: Response, @Req() req: Request): Response {
    return res.status(200).json({message: 'We are here'});
  }
}
