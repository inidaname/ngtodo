import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'The get request';
    }

    @Post()
    creat(): string {
        return 'Create Item';
    }
}
