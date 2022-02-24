import { Document } from "mongoose";

export interface Cart extends Document{
    title:String;
    description:String;
    thumbnail:String;
    stock:Number;
    price:Number;
    _id?:string;
}