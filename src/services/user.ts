import { MongooseError } from "mongoose";
import bcrypt from "bcrypt"; 
import { IUser } from "@/interfaces";
import { User } from "@/models"; 


export class UserService {
    private user: typeof User;
    
    constructor(){
        this.user = User;
    }

    private async hashPassword(password: string):Promise<string>{
        try{
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            return hash; 

        }catch(err){
            throw new Error(`Internal server error:${err}`);
        }
    }

    private async comparePassword(password: string, hash: string):Promise<boolean>{
        try{
            const result = await bcrypt.compare(password, hash);
            return result; 

        }catch(err){
            throw new Error(`Internal server error:${err}`);
        }
    }
    

    public async register(name: string, email: string, password: string):Promise<IUser | boolean>{
        try{
            
            if(!name || !email || !password) throw new Error("Missing fields");
            if(password.length < 6) throw new Error("Password must be at least 6 characters long");
            if(!email.includes("@")) throw new Error("Invalid email address");
            

            const user = await this.user.find({email:email}).lean(); 
            if(JSON.stringify(user) !== "[]" ){
                return false; 
            }


            const hash = await this.hashPassword(password);
            const newUser = new this.user({name, email, password:hash});
            const savedUser = await newUser.save();

            return savedUser;

        }catch(err){
            throw new Error(`Internal server error:${err}`);
        }
    }
    

}