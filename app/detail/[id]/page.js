import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";
import Comment from "./comment";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import not_Found from "./not-found";

export default async function Detail(props) {
    const db = (await connectDB).db("forum");
    const session = await getServerSession(authOptions);

    const returnRandom = () => {
        if (props.params.id.length != 24) {
            return Array(24).fill("0").join("");
        } else {
            return props.params.id;
        }
    };

    let result = await db.collection("userPost").findOne({
        _id: new ObjectId(returnRandom()),
    });

    if (result === null) {
        return not_Found();
    }

    return (
        <div className="detail">
            <h2 className="title text-lg font-bold bg-slate-600 text-slate-100 p-4 text-center mx-4 rounded-lg">
                상세페이지
            </h2>
            <div className="mx-5 p-5">
                <h2 className="title text-lg font-bold">
                    {result.title}
                </h2>
                <div className="content">
                    {result.content}
                </div>
            </div>

            <Comment
                session={session}
                result={JSON.parse(JSON.stringify(result))}
            />
        </div>
    );
}
