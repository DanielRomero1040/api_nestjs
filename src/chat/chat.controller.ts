import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './interfaces/Chat';

@Controller('chat')
export class ChatController {

    constructor( private chatService: ChatService){}

    @Get() 
    @Render('chats/index')
    root(){ 
        return this.chatService.getAll()
         .then( (result)=> result ? {chat: result}:{ chat:[] });
    };

    @Get()
    async getAll():Promise<Chat[]>{        
        return await this.chatService.getAll();
    };


    @Get(`:user`)
    getByUser(@Param(`user`) user):Promise<Chat[]>{        
        return this.chatService.getByUser(user);
    };

    @Post()
    add(@Body() message: CreateChatDto):{}{
        return this.chatService.add(message);
    };
}
