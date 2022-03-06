import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from "mongoose";
import { UserInterface } from './interfaces/User';
import { CreateUserDto } from './dto/create-user.dto';
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

    async add(newUser : CreateUserDto){


        let userToAdd = await this.userModel.create({
            username:newUser.username,
            password:newUser.password,
            nombre:newUser.nombre,
            direccion:newUser.direccion,
            edad:newUser.edad,
            telefono:newUser.telefono,
            avatar:newUser.avatar
        })
        let msg ={
            isProductAlreadyCreate:true,
            userToAdd
        }
        return msg;

        // try{
        //     //validar
        //     let isUserAlreadyCreate = false;
        //     let msg = {};
        //     let user = await this.userModel.findOne({
        //         username: newUser.username
        //     });
        //     console.log("User",user)
        //     if(!user){
        //         console.log("entra en el condicional")
        //         let userToAdd = await this.userModel.create({
        //             username:newUser.username,
        //             password:newUser.password,
        //             nombre:newUser.nombre,
        //             direccion:newUser.direccion,
        //             edad:newUser.edad,
        //             telefono:newUser.telefono,
        //             avatar:newUser.avatar
        //         })
        //         console.log('nuevo user',userToAdd);
        //         msg ={
        //             isUserAlreadyCreate: isUserAlreadyCreate,
        //             user:userToAdd
        //         }
        //         return msg
        //     }
        //     msg ={
        //         isProductAlreadyCreate:true,
        //         user
        //     }
        //     return msg;

        // }catch(e){
        //     //throw new CustomError(500, "Error en ProductsDao add");
        // };

    }

}
