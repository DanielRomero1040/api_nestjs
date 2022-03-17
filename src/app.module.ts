import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';
import { ChatModule } from './chat/chat.module';

@Module({
  //imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/romeroproject')], para mongo compass en local
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: 'schema.gql',
    // }),
    ConfigModule.forRoot({isGlobal:true,}),
    ProductsModule,
    UsersModule,
    CartModule,
    ChatModule, 
    MongooseModule.forRoot(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.hwv82.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`), UsersModule, CartModule, AuthModule, ChatModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
