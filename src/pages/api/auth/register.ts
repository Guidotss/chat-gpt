import type { NextApiRequest, NextApiResponse } from 'next'
import { UserService } from "@/services"; 
import { IUser } from '@/interfaces';
import "@/database/connect"; 
import { signDocument } from '@/jwt';

type Data = 
    |{ message: string }
    |{ message: string, user: {name:string, email:string}, token:string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch(req.method){
        case "POST": 
            return register(req, res); 
        default:
            return res.status(405).json({message: "Method not allowed"}); 
    }
}

const register = async(req:NextApiRequest, res:NextApiResponse<Data>) => {
    const { name, email, password } = req.body;

    try{
        const userService = new UserService();
        const user = await userService.register(name, email, password);

        if(!user) throw new Error("Internal server error");
        
        const { _id } = user;

        const token = signDocument(_id, email);
        return res.status(200).json({message: "User created", user:{email, name}, token});

    }catch(err){
        return res.status(500).json({message: `Internal server error: ${err}`});
    }
}