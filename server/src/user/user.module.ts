import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userSchema } from './userSchema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'user', schema: userSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
