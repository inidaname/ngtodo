import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from './user.dto';
import { User } from './user.interface';
import { Model } from 'mongoose'

@Injectable()
export class UserService {

    constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

    async create(user: User): Promise<User> {
        const newItem = new this.userModel(user);
        return await newItem.save();
    }
}
