import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateUserDto{
    // @Field(()=>ID)
    // _id:String;

    @Field()
    username:String;
    @Field()
    password:String;
    @Field()
    nombre:String;
    @Field({nullable:true})
    direccion:String;
    @Field(()=> Int,{nullable:true})
    edad:Number;
    @Field(()=> Int,{nullable:true})
    telefono:Number;
    @Field({nullable:true})
    avatar:String

}