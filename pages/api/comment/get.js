import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function get(req, res) {
    const db = (await connectDB).db("forum");

    const result = await db
        .collection("comment")
        .find({
            parent: new ObjectId(req.query.id),
        })
        .toArray();

    return res.status(200).json(result);
}
