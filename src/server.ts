import express,{Request, Response, NextFunction} from "express";
import 'express-async-errors'
import cors from "cors";
import path from "path";
import {rotas} from './routes';
import dotenv from 'dotenv'
// import prismaClient from "./prisma";
// import axios from "axios";

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(rotas)
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error:err.message
        })
    }
    return res.status(500).json({
        status:"Erro",
        message:"Erro interno do servidor"
    })
})

app.use("/files",express.static(path.resolve(__dirname, '..', 'tmp')))


app.listen(3333,()=>{console.log("Servidor rodando na porta 3333")})