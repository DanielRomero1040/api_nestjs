import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema , User } from "./schemas/users.schema";


@Module({
  imports:[MongooseModule.forFeature([
    {name:'users',schema:UserSchema}
  ])],
  providers: [ UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
