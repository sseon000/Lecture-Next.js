import { useState } from "react";

export default function JoinPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordCheck,setPasswordCheck] = useState("");

    const [emailErr,setEmailErr] = useState("");
    const [passwordCheckErr,setPasswordCheckErr] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
        if(!email.includes('@')) {
            setEmailErr("이메일 형식이 아닙니다. @를 포함해주세요.");
        } else {
            setEmailErr("");
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangePasswordCheck = (event) => {
        setPasswordCheck(event.target.value);
        alert(password + ":" + event.target.value)
        if(password !== event.target.value) {
            setPasswordCheckErr("비밀번호와 비밀번호확인이 다릅니다.")
        } else {
            setPasswordCheckErr("");
        }
    }

    const onClickJoin = () => {
        if(emailErr === "" && passwordCheckErr === "") {
            alert("가입완료");
        }
    }
    
    return (
        <>
            이메일: <input type="text" onChange={onChangeEmail} value={email} /><br />
            {emailErr && <div style={{color: 'red'}}>{emailErr}</div>}
            비밀번호 : <input type="password" onChange={onChangePassword} value={password} /><br />
            비밀번호확인 : <input type="password" onChange={onChangePasswordCheck} value={passwordCheck} /><br />
            {passwordCheckErr && <div style={{color: 'red'}}>{passwordCheckErr}</div>}
            <button onClick={onClickJoin}>가입하기</button>
        </>
    )
}