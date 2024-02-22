import { gql, useMutation } from "@apollo/client";

// graphql 코드 생성
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFun] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myFun({
      variables: {
        // $들을 말함
        writer: "훈이10101",
        title: "안녕",
        contents: "이건 어때요",
      },
    });
    console.log(result);
  };

  // 한 줄 일때는 괄호() 없어도 됨
  return <button onClick={onClickSubmit}>GRAPHQL API 요청하기</button>;
}
