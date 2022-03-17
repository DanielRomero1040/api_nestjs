import { Injectable } from '@nestjs/common';
import { Chat } from './interfaces/Chat';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {

    constructor(@InjectModel(`chat`) private chatModel:Model<Chat>){}

    async getAll():Promise<Chat[]>{
        try{
            return await this.chatModel.find().exec();
        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao getAll");
        }
    };

    async getByUser(user){
        try{
            let messages;
            messages = await this.chatModel.find({
                email:user
            }).exec().catch((e)=>{});
            if(!messages){
                messages = [];
            }
            return messages;
        }catch(e){            
            //throw new CustomError(500, "Error en ProductsDao getById");
        }
    };

    async add(newMessage : CreateChatDto){

        try{
           
            let messageNew = await this.chatModel.create({
                email: newMessage.email,
                type:newMessage.type,
                date:newMessage.date,
                message:newMessage.message
            })
            let msg ={                
                msg:messageNew
            }
            return msg
            

        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao add");
        };

        
    }
}
