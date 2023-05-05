import { connectDB } from "@/app/util/config";
import bcrypt from "bcrypt";

export default async function signupHander(req, res) {
    let db = (await connectDB).db("forum");

    if (req.method == "POST") {
        // 빈칸 예외처리
        if (
            req.body.name == "" ||
            req.body.email == "" ||
            req.body.password == ""
        ) {
            return res.status(500).json("빈칸 채우쇼");
        }

        // 중복 이메일 예외처리
        const dupCheck = await db
            .collection("user_cred")
            .findOne({
                email: req.body.email,
            });

        if (dupCheck?.email !== (null || undefined)) {
            return res.status(500).json("중복임");
        }

        let hash = await bcrypt.hash(req.body.password, 10);

        let newReq = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            role: "normal",
        };

        await db.collection("user_cred").insertOne(newReq);
        return res.status(200).json(newReq);
    }
}
