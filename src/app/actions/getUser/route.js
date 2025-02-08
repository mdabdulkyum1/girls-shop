import dbConnect, { collectionNameObj } from "@/lib/mongodb";


export async function GET(req, res) {
    try{
        const userCollection = dbConnect(collectionNameObj.userCollection);
        const users = await userCollection.find().toArray();
        return Response.json(users);
    }catch(error){
        console.error(error);
    }
}