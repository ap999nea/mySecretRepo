import prisma from "../prisma";
import { Request, Response } from "express";



export async function store(req : Request,res : Response){
    const data = req.body
    const newEntity = await prisma.todo.create({data}) 
    return res.json(newEntity);
}

export async function list(req : Request,res: Response){
    const todos = await prisma.todo.findMany() 
     return res.json(todos);
}
export async function show(req : Request,res : Response){
    const {id} = req.params
   const todo = await prisma.todo.findUnique({where: {id : parseInt(id)}}) 
    return res.json(todo);
} 
export async function update(req : Request,res : Response) {
    //noi
    return res.status(200).send("not implemented")
    
}