import { Document } from "mongoose";

export interface Chat extends Document{
    email:String;
    type:String;
    date:String;
    message:String
}