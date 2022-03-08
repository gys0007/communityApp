import React from 'react';
import './WelcomePage.scss';

const WelcomePage = () => {
    return(
        <div className="WelcomePage">
            <p>PROTOCOL : LAP-M</p>
            <p>COMPRESSION : V.42BIS</p>
            <p>CONNECT 19200/ARQ\n</p>
            <br/>
            <p>trying : baekdu</p>
            <p>Connecting using IP ... Connected session 1</p>
            <br/>
            <p>'나우누리'에 오신 것을 환영합니다.(baekdu pts/24)!!</p>
            <p>나우 ID가 없는 분은 '손님' 혹은 'GUEST'를 입력하십시오.</p>
        </div>
    )
}

export default WelcomePage;