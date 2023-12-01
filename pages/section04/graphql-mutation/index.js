import { gql, useMutation } from "@apollo/client"



export default function GraphqlMutationPage(){

    // graphql 코드 생성
    const CREATE_BOARD = gql`
        mutation {
            createBoard(
                writer: "훈이",
                title: "안녕하세요 훈이에요",
                contents: "반갑습니다"
            ){
                message
            }
        }
    `

    const [myFun] = useMutation(CREATE_BOARD)

    const onClickSubmit = async() => {
        const result = await myFun()
        console.log(result)
    }

    // 한 줄 일때는 괄호() 없어도 됨
    return <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>
}