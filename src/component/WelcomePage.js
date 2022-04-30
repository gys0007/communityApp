import React from 'react';
import './WelcomePage.scss';

const WelcomePage = () => {
    let typingBool = false;
    let typingIdx = 0;

    let typingTxt = document.querySelector('.typing-txt').innerText;
    return(
        <div className="WelcomePage">
            <p className="typing-txt">PROTOCOL : LAP-M</p>
            <p className="typing-txt">COMPRESSION : V.42BIS</p>
            <p className="typing-txt">CONNECT 19200/ARQ\n</p>
            <br/>
            <p className="typing-txt">trying : baekdu</p>
            <p className="typing-txt">Connecting using IP ... Connected session 1</p>
            <br/>
            <p className="typing-txt">'나우누리'에 오신 것을 환영합니다.(baekdu pts/24)!!</p>
            <p className="typing-txt">나우 ID가 없는 분은 '손님' 혹은 'GUEST'를 입력하십시오.</p>
        </div>
    )
}

export default WelcomePage;