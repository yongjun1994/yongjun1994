import { Server, Socket } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    handleMessage(socket: Socket, data: any): void;
}
export declare class RoomGateway {
    private readonly chatGateway;
    constructor(chatGateway: ChatGateway);
    rooms: string[];
    server: Server;
    handleMessage(data: {
        nickname: string;
        room: string;
    }): void;
    handleJoinRoom(socket: Socket, data: any): void;
    handleMessageToRoom(socket: Socket, data: {
        nickname: string;
        room: string;
        message: string;
    }): void;
}
