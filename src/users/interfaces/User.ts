import { Document } from "mongoose";

export interface UserInterface extends Document{
    username:String;
    password:String;
    nombre:String;
    direccion:String;
    edad:Number;
    telefono:Number;
    avatar:String
}