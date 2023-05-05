import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function delHandler(req, res) {
    if (req.method == "DELETE") {
        try {
            const db = (await connectDB).db("forum");

            // admin은 전체삭제 가능
            // 내 글만 삭제 가능 -> 새글에만 될듯

            const result = await db
                .collection("userPost")
                .deleteOne({
                    _id: new ObjectId(req.body),
                });

            res.status(200).json(`${req.body} 삭제 완료`);
        } catch (error) {
            res.status(500).json("에러뜸");
            console.log(error);
        }
    }
}
