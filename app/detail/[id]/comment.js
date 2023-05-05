"use client";
import { useEffect, useState } from "react";

export default function Comment({ session, result }) {
    const [comment, setComment] = useState("");
    const [data, setData] = useState([]);
    // let [likes, setLikes] = useState(0);

    const ajaxRender = () => {
        fetch(`/api/comment/get?id=${result._id}`)
            .then((r) => r.json())
            .then((result) => {
                setData(result);
            });
    };

    const postLikes = (e) => {
        // setLikes((likes += 1));

        fetch("/api/comment/likes/post", {
            method: "POST",
            body: JSON.stringify({
                likes: 1,
                parent: e._id,
            }),
        })
            .then((r) => r.json)
            .then(() => {
                ajaxRender();
            });
    };

    const ajaxPost = () => {
        fetch("/api/comment/post", {
            method: "POST",
            body: JSON.stringify({
                content: comment,
                author: session.user.name,
                parent: result._id,
            }),
        })
            .then((r) => {
                r.json;
            })
            .then(() => {
                ajaxRender();
            });
    };

    const ajaxDelComment = (event) => {
        fetch("/api/comment/del", {
            method: "POST",
            body: JSON.stringify(event),
        })
            .then((r) => {
                r.json;
            })
            .then(() => {
                ajaxRender();
            });
    };

    useEffect(() => {
        ajaxRender();
    }, []);

    return (
        <div className="mx-5 p-5">
            {/* 댓글 */}
            <p className="font-bold text-lg">
                댓글 목록 보여주는곳
            </p>
            <hr className="my-3" />
            {data.length > 0
                ? data.map((e, i) => {
                      return (
                          <div
                              className="flex items-end w-full"
                              key={i}
                          >
                              <div className="py-3 w-full">
                                  <div className="font-bold text-lg text-cyan-800">
                                      {e.author}
                                  </div>
                                  <div>{e.content}</div>
                                  <div>{e._id}</div>
                              </div>
                              <div className="flex flex-col gap-2 w-full items-end">
                                  <button
                                      className="rounded-lg px-2 py-1 bg-red-700 text-slate-100 w-fit"
                                      onClick={() => {
                                          ajaxDelComment(e);
                                      }}
                                  >
                                      DEL
                                  </button>
                                  <button
                                      className="rounded-lg px-2 py-1 bg-red-300 text-slate-900 w-90 w-fit"
                                      onClick={() => {
                                          postLikes(e);
                                      }}
                                  >
                                      LIKES : {e?.likes}
                                  </button>
                              </div>
                          </div>
                      );
                  })
                : "댓글없음"}
            <input
                onChange={(e) => {
                    setComment(e.target.value);
                }}
                className="m-1 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <button
                onClick={ajaxPost}
                className="rounded-md bg-cyan-700 text-slate-50 px-4 py-2 mx-2"
            >
                댓글전송
            </button>
        </div>
    );
}
