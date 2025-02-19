import { getToken } from 'next-auth/jwt';
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req }); 
    
    if (!token || token.role !== "admin") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
