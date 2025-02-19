import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/mongodb";
import { getServerSession } from "next-auth";


export async function GET(req, res) {
    try{
        const userCollection = dbConnect(collectionNameObj.userCollection);

        const session = await getServerSession(authOptions);
        const email = session?.user?.email;
        const query = {email};
        const user = await userCollection.findOne(query);

        console.log("check isAdmin = ", user?.role);

        if(user?.role === "admin"){
            const users = await userCollection.find().toArray();
            return Response.json(users);
        }
        return Response.json({ message: "Forbidden access"}, {
            status: 403
        });
    }catch(error){
        console.error(error);
    }
}