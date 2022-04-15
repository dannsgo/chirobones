import React from "react";
import "./index.css";

function Login() {
    return (
        <div>
            <main className="login_area">
                <div className="login_box">
                    <div className="login__box">
                        <div className="login_inner">
                            <h1>ChiroBones</h1>
                            <form>
                                <div id="loginId" className="login_form">
                                    <input type="text" name="id" id="id" className="loginBtn_id" aria-label="이메일" required />
                                    <label forhtml="id">id@example.com</label>
                                </div>
                                <div id="loginPw" className="login_form">
                                    <input type="password" name="pw" id="pw" className="loginBtn_pw" autoComplete="on" aria-label="비밀번호" required />
                                    <label forhtml="pw">password</label>
                                </div>
                                <span className="loginBtn_area">
                                    <button type="submit" id="loginBtn_join" className="login_btns" aria-label="가입 버튼" >
                                        Sign up
                                    </button>
                                    <button type="submit" id="loginBtn_login" className="login_btns" aria-label="로그인 버튼" >
                                        Sign in
                                    </button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
