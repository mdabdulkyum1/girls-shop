"use server";


import dbConnect, { collectionNameObj } from "@/lib/mongodb";
import { getToken } from "next-auth/jwt";

export async function GET(req) { // ✅ Export GET function correctly
    try {
        // Ensure database connection is established
// Await connection
        const userCollection =  dbConnect(collectionNameObj.userCollection);

        // Retrieve token from request
        const token = await getToken({ req });
        if (!token?.email) {
            return new Response(JSON.stringify({ message: "Unauthorized: No valid token found" }), { status: 401 });
        }

        console.log("🔹 Token Email:", token.email);

        // Find user in the database
        const user = await userCollection.findOne({ email: token.email });

        if (!user) {
            return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
        }

        console.log("✅ User Found:", user);

        return new Response(JSON.stringify({ role: user.role }), { status: 200 });
    } catch (error) {
        console.error("❌ Error checking role:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error", error: error.message }), { status: 500 });
    }
}
