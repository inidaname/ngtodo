import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { itemSchema } from './schemas/item';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forFeature([{name: 'item', schema: itemSchema}])],
    controllers: [ItemsController],
    providers: [ItemsService]
})

export class ItemsModule { }
