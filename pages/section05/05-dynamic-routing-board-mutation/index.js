import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [myFun] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      // try 에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 무시하고 catch 에 있는 내용이 실행됨
      const result = await myFun({
        variables: {
          writer: "게시글등록 20240222",
          title: "안녕",
          contents: "이건 어때요",
        },
      });
      //   console.log(result);
      //   console.log(result.data.createBoard.number);
      router.push(
        `/section05/04-dynamic-routing-board-query-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>페이지 등록 후 이동하기</button>;
}
