import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function commentHandler(req, res) {
    const db = (await connectDB).db("forum");

    if (req.method == "POST") {
        if (JSON.parse(req.body).content == "") {
            // 비어있음
            console.log("댓글 비어있음");
            return res.status(500).json("칸 채우쇼");
        } else {
            try {
                let insertOb = {
                    ...JSON.parse(req.body),
                    parent: new ObjectId(
                        JSON.parse(req.body).parent
                    ),
                };

                const insert = await db
                    .collection("comment")
                    .insertOne(insertOb);
            } catch (error) {
                console.log(error);
            }

            return res
                .status(200)
                .json(JSON.parse(req.body));
        }
    }
}
