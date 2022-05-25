import { Request, Response } from "express";
import prisma from '../prisma';

export async function list(req : Request,res: Response){
    const users = await prisma.user.findMany() 
     return res.json(users);
}


 export async function store(req : Request,res : Response){
    const userData = req.body
    const newUser = await prisma.user.create({data: userData}) 
     return res.json(newUser);
}
export async function show(req : Request,res : Response){
    const {username} = req.params
   const users = await prisma.user.findUnique({where: {username}}) 
    return res.json(users);
} 
export async function userTodo(req : Request,res : Response){
    const {username} = req.params
    // console.log(`NUOVO AAAA \n \n \n`)
    
    const user = await prisma.user.findUnique({where : {username}})
    
    
    const todos = !!user ? await prisma.todo.findMany({where: {userId: user?.id}}) : []
    console.log(todos)
    return res.json(todos)
} 