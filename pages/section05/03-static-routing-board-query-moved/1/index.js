import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);

  return (
    <div>
      <div>1번 게시글 이용이 완료!</div>
      {/* null 이라 안나옴.. 확인 필요 <div>작성자 : {data && data.fetchBorad.writer}</div> */}
    </div>
  );
}
