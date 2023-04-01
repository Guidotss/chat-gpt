import { NextFetchEvent, NextResponse } from "next/server"; 
import { NextRequest } from "next/server";  

export function middleware(req: NextRequest, ev: NextFetchEvent) {

    if(req.nextUrl.pathname === "/"){
        if(!req.cookies.get("token")){
            return NextResponse.redirect(new URL("/auth/login", req.nextUrl.href));
        }
        return NextResponse.next();
    }
}