import { Injectable } from '@nestjs/common';
import { Items } from './interfaces/items.interface'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {

    constructor(@InjectModel('item') private readonly itemModel: Model<Items>) {
        
    }

    async findAll(): Promise<Items[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Items> {
        return await this.itemModel.findOne({_id: id});
    }

    async create(item: Items): Promise<Items> {
        const newItem = new this.itemModel(item)
        return await newItem.save();
    }

    async delete(id: string): Promise<Items>{
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, updateData: Items): Promise<Items> {
        return await this.itemModel.findByIdAndUpdate(id, updateData, { new: true })
    }
}
