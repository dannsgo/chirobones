import React from "react";
import "./FirstTab_01input.css"

function firstTab_01input() {
    return (
        <div>
            <form>
                <div className="join_form">
                    <h3 className="join_title">
                        <label forhtml="joinId">Name</label>
                    </h3>
                    <input type="text" name="id" id="id" aria-label="이메일" required />
                </div>
                <div className="join_form">
                    <h3 className="join_title">
                        <label forhtml="joinId">Gender</label>
                    </h3>
                    <input type="text" name="id" id="id" aria-label="이메일" required />
                </div>
                <div className="join_form">
                    <h3 className="join_title">
                        <label forhtml="joinId">Birth Date</label>
                    </h3>
                    <input type="text" name="id" id="id" aria-label="이메일" required />
                </div>
                <div className="joinBtn_area">
                    <button type="submit" id="joinBtn" aria-label="계정 생성">
                        Register Patient
                    </button>
                </div>
            </form>
            {/* 사진은 컨버스로 저장하고 등록날짜는 mapper에서 now() 설정 할것! */}
        </div>
    );
}

export default firstTab_01input;
