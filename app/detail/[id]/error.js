"use client";

export default function Error({ error, reset }) {
    // props 안에는 error 랑 reset들어옴. 위에 처럼 말고 props써도됨
    console.log(error);
    return (
        <div>
            <div>Error !!</div>
            <button onClick={reset}>RESET</button>
        </div>
    );
}
