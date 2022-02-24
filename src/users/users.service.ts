import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from "mongoose";
import { UserInterface } from './interfaces/User';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInput } from './input/user.input';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel:Model<UserInterface>){}

    async getAll(){
        try{
            return await this.userModel.find().exec();
        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao getAll");
        }
    };

    async add(createUserDto : UserInput):Promise<UserInterface>{

        try{      
            const createdUser = new this.userModel(createUserDto); 
            
            return await createdUser.save();
         
        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao add");
        };
    }

}
