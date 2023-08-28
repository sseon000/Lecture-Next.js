/**
 1.state를 활용하여 안녕하세요 => 반갑습니다 로 변경하기
  1. "안녕하세요"라는 버튼을 만들고, 버튼 클릭시 "반갑습니다" 로 변경해 보세요
   1-1) let 과 document.geElementById()를 사용해 주세요.
   1-2) state를 사용해 주세요.
 */

import { useState } from "react";

function LetDocumentPage(){
    const onClickBtnHello = () => {
        let sayHello = "반갑습니다."        
        document.getElementById("btn-hello").innerText = sayHello;
    }

    return (
        <button id="btn-hello" onClick={onClickBtnHello}>안녕하세요.</button>
    )
}

export default function StatePage(){
    const [hello, setHello] = useState("안녕하세용.");

    const onClickHello = () => {
        setHello("반갑습니다.");
    }

    return (
        <button onClick={onClickHello}>{hello}</button>
    )
}