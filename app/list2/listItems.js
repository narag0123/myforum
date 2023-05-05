"use client";

import Link from "next/link";
import React from "react";

export default function ListItems({ result }) {
    const ajaxDel = (e, event) => {
        // fetch("/api/post/del", {
        //     method: "DELETE",
        //     body: e._id,
        // })
        //     .then((r) => r.json())
        //     .then(() => {
        //         event.target.parentElement.style.opacity = 0;
        //         setTimeout(() => {
        //             event.target.parentElement.style.display =
        //                 "none";
        //         }, 1000);
        //     });
        fetch("/api/abc/어쩌구");
    };

    return (
        <div>
            {result.map((e) => {
                return (
                    <div
                        className="p-3 unit"
                        key={e._id.toString()}
                    >
                        <Link
                            href={`/detail/${e._id.toString()}`}
                        >
                            <h3 className="font-bold text-lg my-3">
                                {e.title}
                            </h3>
                        </Link>
                        <button
                            className="btn btn-del"
                            onClick={(event) => {
                                ajaxDel(e, event);
                            }}
                        >
                            DEL
                        </button>
                        <Link
                            href={`/edit/${e._id}`}
                            className="btn btn-edit"
                        >
                            EDIT
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
