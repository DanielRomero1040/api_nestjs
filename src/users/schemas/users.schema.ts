import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()

export class User extends Document{
    @Prop({required:true})
    username:string;

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    email:string;
    
    @Prop()
    age:number;
    
    @Prop()
    phone:number;

    @Prop()
    avatar:string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);