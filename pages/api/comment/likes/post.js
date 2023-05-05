import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function post(req, res) {
    const body = JSON.parse(req.body);
    const db = (await connectDB).db("forum");

    const search = await db
        .collection("comment")
        .find({
            _id: new ObjectId(body.parent),
        })
        .toArray();
    const addNewBody = {
        ...search[0],
        likes: 1,
    };

    const updateNewBody = {
        ...search[0],
        likes: (search[0].likes += 1),
    };

    if (req.method == "POST") {
        // console.log(body);
        // console.log(search);
        // console.log(search[0].likes);
        // console.log(new ObjectId(body.id));

        if (!search[0].likes) {
            console.log("likes생성");
            const update = await db
                .collection("comment")
                .updateOne(
                    {
                        _id: new ObjectId(body.parent),
                    },
                    {
                        $set: addNewBody,
                    }
                );
            return res.status(200).json("LIKED");
        } else {
            console.log("+1");
            const update = await db
                .collection("comment")
                .updateOne(
                    {
                        _id: new ObjectId(body.parent),
                    },
                    {
                        $set: updateNewBody,
                    }
                );
        }
    }

    return res.status(200).json("LIKED");
}
