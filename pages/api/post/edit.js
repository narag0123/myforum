import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function EditHandler(req, res) {
    const db = (await connectDB).db("forum");

    if (req.method == "POST") {
        // _id 가 바뀔수도 있어서 id냅두고 이렇게 함
        const newBody = {
            title: req.body.title,
            content: req.body.content,
        };

        try {
            await db.collection("userPost").updateOne(
                { _id: new ObjectId(req.body._id) },
                {
                    $set: newBody,
                }
            );
            // console.log(req.body);

            res.status(200).json(newBody);
        } catch (err) {
            console.log(err);
        }
    }
}
