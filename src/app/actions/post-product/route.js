import dbConnect from "@/lib/mongodb";


export async function POST(req, res) {
        try{

           const data = req.body;
           console.log(data);

           const result = await dbConnect("products").insertOne(data);
           return Response.json(result);

        }catch(error){
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
}