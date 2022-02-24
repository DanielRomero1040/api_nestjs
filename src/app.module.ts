import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CartService } from './cart/cart.service';
import { CartController } from './cart/cart.controller';
import { CartModule } from './cart/cart.module';

@Module({
  //imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/romeroproject')], para mongo compass en local
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot({isGlobal:true,}),
    ProductsModule,
    UsersModule,
    CartModule, 
    MongooseModule.forRoot(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.hwv82.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`), UsersModule, CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
