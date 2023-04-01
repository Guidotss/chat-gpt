import jwt from "jsonwebtoken"; 

export const verifyToken = (token:string):Promise<string> => {
    if(!process.env.JWT_SECRET) throw new Error("JSON_SECRET not defined");
    if(token.length < 6) throw new Error("Invalid token");

    return new Promise((resolve,reject) => {
        try{
            jwt.verify(token, process.env.JWT_SECRET || '', (err, decoded) => {
                if(err) reject(err);
                resolve(decoded as string);
            });
        }catch(err){
            reject(err);
        }
    })
}