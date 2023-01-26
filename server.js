import fastify from 'fastify';
import fastifySocketIo from 'fastify-socket.io';
import { config } from "dotenv";
config();

const server = fastify({ logger: true });

server.register(fastifySocketIo);

const port = process.env.PORT || 3000;
server.listen({port}, (err, address) => {
    if (err) throw err
    server.log.info(`server listening on ${address}`)

    server.io.on('connection', (socket) => {

    });
});