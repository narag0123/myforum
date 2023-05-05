import { connectDB } from "@/app/util/config";

export default async function postHandler(req, res) {
    const db = (await connectDB).db("forum");

    if (req.method == "POST") {
        if (
            req.body.title == "" ||
            req.body.content == ""
        ) {
            res.status(200).json("비었다 임마");
        } else {
            try {
                const db = (await connectDB).db("forum");
                await db
                    .collection("userPost")
                    .insertOne(req.body);

                // res.status(200).redirect("/");
                res.writeHead(302, {
                    Location: "/list",
                });
                res.end();
            } catch (error) {
                res.status(500).json("에러뜸");
                console.log(error);
            }
        }
    }
}
