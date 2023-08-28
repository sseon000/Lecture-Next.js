/**
 3.state를 활용하여 인증번호 생성하기
  3. 인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시 인증번호를 만들어서 인증번호 6자리가 변경되도록 적용해주세요.
   1-1) let 과 document.geElementById()를 사용해 주세요.
   1-2) state를 사용해 주세요.
 */

import { useState } from "react";

function LetDocumentPage(){
    const onClickToken = () => {
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
        document.getElementById("token").innerText = token;
    }
   
    return (
        <>
            <div id="token">000000</div>
            <button onClick={onClickToken}>인증요청</button>
        </>
    )
}

export default function StatePage(){
    const [token,setToken] = useState("000000");

    const onClickToken = () => {
        setToken(String(Math.floor(Math.random() * 1000000)).padStart(6,"0"));
    }

    return (
        <>
            <div>{token}</div>
            <button onClick={onClickToken}>인증요청</button>
        </>
    )
}