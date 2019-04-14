import { Injectable } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserDTO } from './user.dto';
import { User } from './user.interface';
import * as mongoose from 'mongoose'

@Injectable()
export class UserService {
    async create(createUser: CreateUserDTO): Promise<User> {
        // const newUser = new mongoose.
        return await createUser;
    }
}
