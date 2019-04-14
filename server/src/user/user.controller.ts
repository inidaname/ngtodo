import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { CreateUserDTO } from './user.dto';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUser: CreateUserDTO, @Req() req: Request, @Res() res: Response ) {
        this.userService.create(createUser);
        
    }
}
