// import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';

// @WebSocketGateway()
// export class Gateway implements OnGatewayConnection, OnGatewayDisconnect {
//     @WebSocketServer() server: Server;

//     handleConnection(client: Socket) {
//         console.log(`Client connected}`);
//     }

//     handleDisconnect(client: Socket) {
//         console.log(`Client disconnected`);
//     }

//     // Phương thức để gửi dữ liệu đến client
//     sendToClient(event: string, data: any) {
       
//             this.server.emit(event, data);
    
//     }
//     sendMessage(message:string){
//         this.server.emit('message',message)
//     }
//     sendToAdmin(event: string, data: any) {
//         // Gửi thông báo đến admin
//         this.server.emit(event, data);
//     }
// }
