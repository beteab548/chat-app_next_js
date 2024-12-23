import getPrismaInstance from "../utils/PrismaClient"

export const addMessage=(req,res,next)=>{
const {from ,to ,message}=req.body
const prisma=getPrismaInstance()
const message=prisma.Message
}