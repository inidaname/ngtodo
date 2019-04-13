import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Items } from './interfaces/items.interface';
import { ItemsService } from './items.service';
import { CreateItem } from './dto/create.dto';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Promise<Items[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Items> {
        return this.itemsService.findOne(id);
    }

    @Post()
    creat(@Body() createItemDto: CreateItem): Promise<Items> {
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Items> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateData: CreateItem): Promise<Items> {
        return this.itemsService.update(id, updateData);
    }
}
