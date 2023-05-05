import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function delHandler(req, res) {
    const db = (await connectDB).db("forum");

    if (req.method == "POST") {
        console.log(JSON.parse(req.body)._id);
        const result = await db
            .collection("comment")
            .deleteOne({
                _id: new ObjectId(JSON.parse(req.body)._id),
            });

        return res.status(200).json("삭제됨");
    }
}
