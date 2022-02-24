import { Field, Float, InputType, Int } from "@nestjs/graphql";


@InputType()
export class UserInput{
    @Field()
    username:String;

    @Field()
    password:String;

    @Field()
    nombre:String;

    @Field({nullable:true})
    direccion?:String;
    
    @Field(()=> Int,{nullable:true})
    edad:Number;

    @Field(()=> Int,{nullable:true})
    telefono:Number;

    @Field({nullable:true})
    avatar:String

}