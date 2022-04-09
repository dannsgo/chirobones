import React from "react";

function firstTab_02diagnosis() {
    return (
        <div>
            <form>
                <div className="join_form">
                    <h3 className="join_title">
                        <label forhtml="joinId">Diagnosis</label>
                    </h3>
                    <textarea value=""></textarea>
                </div>
                <div className="join_form">
                    <h3 className="join_title">
                        <label forhtml="joinId">Prescription</label>
                    </h3>
                    <textarea value=""></textarea>    
                </div>
                <div className="joinBtn_area">
                    <button type="submit" id="joinBtn" aria-label="계정 생성">
                        Registeration
                    </button>
                    <button type="submit" id="joinBtn" aria-label="계정 생성">
                        Update
                    </button>
                </div>
           </form>
        </div>
    );
}

export default firstTab_02diagnosis;
