import { connectDB } from "@/app/util/config";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    const db = (await connectDB).db("forum");
    const result = await db
        .collection("userPost")
        .findOne({ _id: new ObjectId(props.params.id) });

    return (
        <div className="edit">
            <h2>EDIT</h2>
            <form action="/api/post/edit" method="POST">
                <input
                    defaultValue={result.title}
                    name="title"
                />
                <input
                    defaultValue={result.content}
                    name="content"
                />
                <input
                    style={{
                        display: "none",
                    }}
                    defaultValue={result._id.toString()}
                    name="_id"
                />
                <button
                    type="submit"
                    className="btn btn-write"
                >
                    전송
                </button>
            </form>
        </div>
    );
}
