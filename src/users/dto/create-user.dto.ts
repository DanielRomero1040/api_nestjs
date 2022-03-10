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
    name:String;
    @Field({nullable:true})
    email:String;
    @Field(()=> Int,{nullable:true})
    age:Number;
    @Field(()=> Int,{nullable:true})
    phone:Number;
    @Field({nullable:true})
    avatar:String

}