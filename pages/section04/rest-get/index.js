import axios from "axios"

export default function RestGet() {

    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // promise
    }

    // 함수 중복 선언 이슈가 있을 수 있으니, 함수표현식이나 화살표 함수로 변경해서 사용해야함
    // async function onClickSync(){
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result) // 받아온 결과값
    //     console.log(result.data.title) 
    // }

    const onClickSync = async() => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) // 받아온 결과값
        console.log(result.data.title) 
    }

    return(
        <div>
            <button onClick={onClickAsync}>비동기 요청</button>
            <button onClick={onClickSync}>동기 요청</button>
        </div>
    )
}