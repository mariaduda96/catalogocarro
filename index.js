import 'dotenv/config'

import clienteController from './src/controller/clienteControlle'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


server.use(clienteController)


server.listen(process.env.PORT, ()=> console.log(`API Conectada na Porta ${process.env.PORT}`));