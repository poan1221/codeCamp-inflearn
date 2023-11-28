import {MyEmail, EmailInput} from '../../../styles/emotionStyles';

export default function EmotionPage(){


    return (
        <div>
            <MyEmail>이메일 : </MyEmail>
            <EmailInput type="text"/>
            <button>클릭</button>
            <img src="/next.svg" />
        </div>
    )
}