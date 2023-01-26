import fastify from 'fastify';
import fastifySocketIo from 'fastify-socket.io';
import { config } from "dotenv";
config();

const server = fastify({ logger: true });

server.register(fastifySocketIo);

const port: number = parseInt(process.env.PORT!) || 3000;
server.listen({
    port: port,
}, (err, address)=>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening on ${address}`);
    server.io.on("connection", (socket)=>{
        console.log("Client connected");
        socket.on("disconnect", ()=>{
            console.log("Client disconnected");
        });
    });
})