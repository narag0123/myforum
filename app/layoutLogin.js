"use client";

import { signIn, signOut } from "next-auth/react";

export default function LayoutLogin({ session }) {
    return (
        <div>
            <button
                onClick={() => {
                    // 이건 로그인
                    {
                        session == null
                            ? signIn()
                            : signOut();
                    }
                }}
                className="px-4 py-2 mx-4 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
            >
                {session == null ? "로그인" : "로그아웃"}
            </button>
        </div>
    );
}
