import jwt from "jsonwebtoken"; 


export const signDocument = (_id:string, email:string) => {
    if(!process.env.JWT_SECRET) throw new Error("JSON_SECRET not defined");

    return jwt.sign({ _id, email }, process.env.JWT_SECRET, { expiresIn: "1h" });
}