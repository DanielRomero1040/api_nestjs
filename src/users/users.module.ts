import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema , User } from "./schemas/users.schema";
import { UsersResolver } from './users.resolver';

@Module({
  imports:[MongooseModule.forFeature([
    {name:User.name,schema:UserSchema}
  ])],
  providers: [UsersResolver , UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
