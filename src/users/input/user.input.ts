import { Field, Float, InputType, Int } from "@nestjs/graphql";


@InputType()
export class UserInput{
    @Field()
    username:String;

    @Field()
    password:String;

    @Field()
    name:String;

    @Field({nullable:true})
    email?:String;
    
    @Field(()=> Int,{nullable:true})
    age:Number;

    @Field(()=> Int,{nullable:true})
    phone:Number;

    @Field({nullable:true})
    avatar:String

}