import {useState} from 'react';

export default function CounterState () {
    //let count = 0 // let은 jsx에서 변경 감지가 안되서 화면 반영이 이루어지지 않음
    const [count, setCount] = useState(0)

    function onClickCountUp(){
        setCount( count + 1)
    }
    function onClickCountDown(){
        setCount( count - 1)
    }

    return (
        <>
            <div>{count}</div>

            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </>

    )
}