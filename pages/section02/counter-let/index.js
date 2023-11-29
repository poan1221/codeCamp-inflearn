export default function CounterLet () {

    function onClickCountUp(){
        const count = Number(document.getElementById("numBox").innerText) + 1;
        document.getElementById("numBox").innerText = count
    }
    function onClickCountDown(){
        const count = Number(document.getElementById("numBox").innerText) - 1;
        document.getElementById("numBox").innerText = count
    }

    return (
        <>
            <div id="numBox">0</div>

            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </>

    )
}