import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

// graphql 코드 생성
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(
            writer: $writer,
            title: $title,
            contents: $contents
        ){
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()


    const [myFun] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await myFun({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangeTitie = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <div>
            작성자 : <input type="text" onChange={onChangeWriter} />
            제목 : <input type="text" onChange={onChangeTitie} />
            내용 : <input type="text" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>
        </div>
    )
}