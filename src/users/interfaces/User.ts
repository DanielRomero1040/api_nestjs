import { Document } from "mongoose";

export interface UserInterface extends Document{
    username:String;
    password:String;
    name:String;
    email:String;
    age:Number;
    phone:Number;
    avatar:String
}