/**
 2.state를 활용하여 카운터 만들기
  2. 0이라는 숫자와 "카운트올리기"라는 버튼을 만들고, 버튼 클릭시 숫자를 1씩 증가해 주세요.
   1-1) let 과 document.geElementById()를 사용해 주세요.
   1-2) state를 사용해 주세요.
 */

import { useState } from "react";

function LetDocumentPage(){
    const onClickIncrease = () => {
        let count = Number(document.getElementById("count").innerText) + 1;
        document.getElementById("count").innerText = count;
    }

    return (
        <>
            <div id="count">0</div>
            <button onClick={onClickIncrease}>카운트올리기</button>
        </>
    )
}

export default function StatePage(){
    const [count,setCount] = useState(0);

    const onClickIncrease = () => {
        setCount(prev => prev+1);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickIncrease}>카운트올리기</button>
        </>
    )
}