import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo', { useNewUrlParser: true }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
