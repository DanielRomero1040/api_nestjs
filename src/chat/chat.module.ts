import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatSchema } from "./schemas/chat.schema";

@Module({
    imports:[MongooseModule.forFeature([
    {name:'chat',schema:ChatSchema}
    ])],
    controllers:[ChatController],
    providers:[ChatService]
})
export class ChatModule {}
