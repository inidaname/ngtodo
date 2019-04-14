import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
    async create(createUser: CreateUserDTO): Promise<User> {
        return createUser;
    }
}
