import Link from "next/link";
import { connectDB } from "../util/config";
import ListItems from "./listItems";

// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";

export const revalidate = 20;

export default async function List() {
    const db = (await connectDB).db("forum");
    let result = await db
        .collection("userPost")
        .find()
        .toArray();

    return (
        <div className="list">
            <h1>글 리스트</h1>
            <ListItems
                result={JSON.parse(JSON.stringify(result))}
            />
        </div>
    );
}
