import { io } from './http';

type IPropsSocket = {};

io.on('connection', (socket: any) => {
    console.log('user connected: ', socket.id);
    socket.on('disconnect', () => console.log('user desconect socketIo'));
});
