import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interfaces/User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController { constructor( private usersService: UsersService){}

@Get()
async getUser():Promise<UserInterface[]>{        
    return await this.usersService.getAll();
};
@Get(`:id`)
getById(@Param(`id`) id):Promise<UserInterface[]>{        
    return this.usersService.getById(id);
};

@Post()
addUser(@Body() user: CreateUserDto):{}{
    return this.usersService.add(user);
};

}
