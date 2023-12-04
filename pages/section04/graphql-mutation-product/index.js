import { gql, useMutation } from "@apollo/client"



export default function GraphqlMutationPage(){

    // graphql 코드 생성
    const CREATE_Product = gql`
        mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ #변수의 타입 적는 곳
            createProduct( #실제 전달할 변수 적는 곳
                seller: $seller,
                createProductInput: $createProductInput,
            ){
                _id
                number
                message
            }
        }
    `

    const [createProduct] = useMutation(CREATE_Product)

    const onClickSubmit = async() => {
        const result = await createProduct({
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "짱 좋은 마우스",
                    price: 4000
                }
            }
        })
        console.log(result)
    }

    // 한 줄 일때는 괄호() 없어도 됨
    return <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>
}