import React from "react";
import "./index.css";

function Join() {
    return (
        <div>
            <main className="join_area">
                <div className="join_container">
                    <h1>ChiroBones</h1>
                    <form>
                        <div className="join_pannel">
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="joinId">아이디</label>
                                </h3>
                                <input type="text" name="id" id="id" aria-label="이메일" placeholder="id@example.com" required />
                            </div>
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="pw1">비밀번호</label>
                                </h3>
                                <input type="password" name="pw1" id="pw1" aria-label="비밀번호" autoComplete="on" required />
                            </div>
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="pw2">비밀번호 재확인</label>
                                </h3>
                                <input type="password" name="pw2" id="pw2" aria-label="비밀번호 재확인" autoComplete="on" required />
                            </div>
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="joinName">이름</label>
                                </h3>
                                <input type="text" name="joinName" id="joinName" required />
                            </div>
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="license">면허 번호</label>
                                </h3>
                                <input type="text" name="license" id="license" aria-label="면허 번호" required />
                            </div>
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="licenseDate">면허 취득 일자</label>
                                </h3>
                                <input type="text" name="licenseDate" id="licenseDate" aria-label="면허 취득 일자" required />
                            </div>
                            <div className="join_form">
                                <h3 className="join_title">
                                    <label forhtml="">근무 병원</label>
                                </h3>
                                <input type="text" name="" id="" aria-label="근무 병원" required />
                            </div>
                            <div className="joinBtn_area">
                                <button type="submit" id="joinBtn" aria-label="계정 생성">
                                    Create account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Join;
