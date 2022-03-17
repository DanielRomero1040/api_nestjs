import {Schema} from "mongoose";

export const ChatSchema = new Schema({ 

    email:String,
    type:String,
    date:String,
    message:String
});