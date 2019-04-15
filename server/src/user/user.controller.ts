import { Controller, Post, Body, Req, Res, Inject, Get, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDTO } from './userd';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { User } from './user.interface';
import { Observable, Subscribable, SubscribableOrPromise } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User | string> {
        return this.userService.getUserById(id)
            .then((result: User) => {
                return result;
            }).catch((err: Error) => {
                return err.message = 'User does';
            });
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.getAllUser();
    }

    @Post('login')
    login(@Body('email') email: string, @Body('password') password: string): Promise<User> {
        return this.userService.userLogin(email, password);
    }

    @Post()
    create(@Body() createUser: CreateUserDTO): Promise<User> {
        return this.userService.createUser(createUser);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateData: User): Promise<User> {
        return this.userService.updateUser(id, updateData);
    }
}
