import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from "mongoose";
import { UserInterface } from './interfaces/User';
import { CreateUserDto } from './dto/create-user.dto';
import { encodePassword } from 'src/utils/bcrypt';
//import { UserInput } from './input/user.input';



@Injectable()
export class UsersService {
    constructor(@InjectModel('users') private userModel:Model<UserInterface>){}

    async getAll(){
        try{
            return await this.userModel.find().exec();
        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao getAll");
        }
    };

    async getById(id){
        try{
            let user;
            user = await this.userModel.find({
                _id:id
            }).exec().catch((e)=>{});
            if(!user){
                user = [];
            }
            return user;
        }catch(e){            
            //throw new CustomError(500, "Error en ProductsDao getById");
        }
    };

    async getByUsername(username){
        try{
            let user;
            user = await this.userModel.findOne({
                username
            }).select("+password").exec().catch((e)=>{});
            if(!user){
                user = {};
            }
            return user;
        }catch(e){            
            //throw new CustomError(500, "Error en ProductsDao getById");
        }
    }

    async getByUsernamePrivate(username){
        try{
            let user;
            user = await this.userModel.findOne({
                username
            }).exec().catch((e)=>{});
            if(!user){
                user = {};
            }
            return user;
        }catch(e){            
            //throw new CustomError(500, "Error en ProductsDao getById");
        }
    }

    async add(newUser : CreateUserDto){
        try{
            //validar
            let isUserAlreadyCreate = false;
            let msg = {};
            let usernameValidator = await this.userModel.findOne({
                username: newUser.username
            });
            let emailValidator = await this.userModel.findOne({
                email: newUser.email
            });
            
            console.log("User",usernameValidator)
            console.log("email",emailValidator)
            if(usernameValidator ||emailValidator ){
                
                msg ={
                    isUserAlreadyCreate:true,
                    user: usernameValidator || emailValidator
                }
                return msg
            }
            const password = encodePassword(newUser.password);
            console.log(password)
            let userToAdd = await this.userModel.create({ ...newUser, password})
            console.log('nuevo user',userToAdd);
            msg ={
                isUserAlreadyCreate: isUserAlreadyCreate,
                user:userToAdd
            }
            return msg;

        }catch(e){
            //throw new CustomError(500, "Error en ProductsDao add");
        };

    }

}
