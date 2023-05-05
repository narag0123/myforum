export default function Register() {
    return (
        <div>
            <form
                method="POST"
                action="/api/auth/signup"
                className="flex justify-center items-center my-10"
            >
                <input
                    name="name"
                    type="text"
                    placeholder="이름"
                />
                <input
                    name="email"
                    type="text"
                    placeholder="이메일"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="비번"
                />
                <button
                    type="submit"
                    className="rounded-full bg-black text-white px-4 py-2 min-w-max my-5"
                >
                    가입하기
                </button>
            </form>
        </div>
    );
}
