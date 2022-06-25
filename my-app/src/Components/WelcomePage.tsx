import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import '../style/WelcomePage.scss';

interface TextProps{
    time: number;
}

export const Text = styled.p<TextProps>`
    animation-name: text;
    animation-delay: ${(props.time)}s;
`

const textAnimation = keyframes`
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`

const WelcomePage:FC = () => {
    
    const [id, setId] = useState('');

    return(
        <div className="WelcomePage">
            <Text time={1}>COMPRESSION : V.42BIS</Text>
            <Text time={1}>CONNECT 19200/ARQ\n</Text>
            <p className="typing-txt">trying : baekdu</p>
            <p className="typing-txt">Connecting using IP ... Connected session 1</p>
            <br/>
            <p className="typing-txt">'나우누리'에 오신 것을 환영합니다.(baekdu pts/24)!!</p>
            <p className="typing-txt">나우 ID가 없는 분은 '손님' 혹은 'GUEST'를 입력하십시오.</p>
            <br />
            <NewUserGuide/>
            <div className="login_wrapper">
                <span className="typing-txt">나우 ID :</span>
                <input type="text" value={id}  />
            </div>
            
        </div>
    )
}



const NewUserGuide = () => {

    const typeText = useRef();

    return(
        <div className="newUserGuide">
            <p className="text-center typing-txt" >---------------------------------------------------</p>
            <p className="text-center typing-txt" >***&nbsp;'나', '우리', 그리고 '함께하는 세상'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***</p>
            <p className="text-center typing-txt">***&nbsp;이제 나우누리가 여러분과 '나우'함께 합니다.&nbsp;***</p>
            <p className="text-center typing-txt">***&nbsp;'나우'는 조금 더 낫게'의 순 우리말 입니다.&nbsp;&nbsp;***</p>
            <p className="text-center typing-txt">---------------------------------------------------</p>
            <br/>
            <p className="typing-txt">귀하의 방문을 진심으로 환영합니다.</p>
            <p className="typing-txt">나우누리는 '나와 우리가 함께 어우러지는 마당'이 되고자 합니다.</p>
            <p className="typing-txt">이용신청 및 요금안내는 초기화면 1번 서비스안내를 참조하십시오.</p>
            <br/>
            <p className="typing-txt">감사합니다.</p>
            <br />
            <p className="text-right typing-txt">- 나우누리 운영진 일동 -</p>

            <div className="none-screen"></div>
        </div>
    )
}

export default WelcomePage;
