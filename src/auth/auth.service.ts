import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(private userService:UsersService, private jwtService:JwtService){}

   async validateUser(username:string, password:string):Promise<any>{
      let user = await this.userService.getByUsername(username);
      console.log(user.password)
      const matched = comparePasswords(password,user.password);
      if(user && matched){
         user = await this.userService.getByUsernamePrivate(username);
         console.log(user)
         return user;
      }
      let msg = {meg:"User or password incorrect"};
      return msg;
   }

   async login(user:any){
      const payload = {name: user.name,sub: user.id};
      return{
         access_token: this.jwtService.sign(payload),
      }
   }
}
