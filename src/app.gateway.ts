import { Logger } from '@nestjs/common';
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateChatDto } from './chat/dto/create-chat.dto';

@WebSocketGateway({ namespace: 'websocket' })
export class AppGateway implements OnGatewayInit, OnGatewayConnection,OnGatewayDisconnect {
  
  private logger:Logger = new Logger('AppGateway');
  
  @WebSocketServer()
  server;

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }
  
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: CreateChatDto): void {
    this.server.emit('message', message);
    
    console.log(message)
  }
}
