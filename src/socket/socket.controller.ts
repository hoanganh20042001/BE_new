// import { Controller, Get, Param } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
// // import { AppService } from './app.service';
// import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
// import { Server } from 'socket.io';
// import { Gateway } from './socket.getway';
// @ApiTags('socket')
// @WebSocketGateway()
// @Controller('socket')
// export class SocketController {
//   constructor(private readonly gateway: Gateway) {}
// // 
//     @WebSocketServer() server: Server;

//     @Get('send-message')
//     async sendMessage() {
//         this.gateway.sendMessage('Hello from server!');
//         return 'Message sent to client!';
//     }
// }
