import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/soldcom')],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
