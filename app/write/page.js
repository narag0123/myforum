import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
    let session = await getServerSession(authOptions);
    console.log(session);

    return (
        <div className="write">
            <h4>
                {session == null
                    ? "로그인이나 하쇼"
                    : "글 싸 보쇼"}
            </h4>
            {session == null ? null : (
                <form action="/api/post/post" method="POST">
                    <input
                        placeholder="글 제목 작성"
                        name="title"
                    />

                    <input
                        placeholder="글 내용 작성"
                        name="content"
                    />
                    <button
                        type="submit"
                        className="btn btn-write"
                    >
                        전송
                    </button>
                </form>
            )}
        </div>
    );
}
