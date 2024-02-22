import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  // console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.boardPg),
    },
  });

  // console.log(data);

  return (
    <div>
      <div>{router.query.boardPg}번 게시글 이용이 완료!</div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
    </div>
  );
}
