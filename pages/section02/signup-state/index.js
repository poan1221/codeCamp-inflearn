import {useState} from "react";

export default function SignupStatePage(){
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");

    function onChangeEmail(event){
        /*
        console.log(event); //나의 행동
        console.log(event.target); //작동된 태그
        console.log(event.target.value); //작동된 태그의 값
        */
        setMail(event.target.value);
    }
    function onChangePassword(event){
        setPassword(event.target.value);
    }


    function onClickSignup(){
        console.log(mail, password);

        // 1. 검증 하기
        if (mail.includes("@") === false) {
            // document.getElementById("mailError").innerText = "올바른 메일 주소를 넣어 주세요."
            setEmailError("올바른 메일 주소를 넣어 주세요.")
        } else {
            // 2. api에 전송 _ 나중에
            // 3. 성공 알림 보여 주기
            alert("회원 가입을 축하 합니다!")
        }

    }

    return(
        <>
            이메일 : <input type="text" onChange={onChangeEmail}/>
            {/*<div id="mailError"></div>*/}
            <div>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}
