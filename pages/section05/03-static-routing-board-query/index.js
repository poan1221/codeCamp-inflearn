import { Divider } from "antd";
import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickMove1 = () => {
    router.push("/section05/03-static-routing-board-query-moved/1");
  };

  const onClickMove2 = () => {
    router.push("/section05/03-static-routing-board-query-moved/2");
  };

  return (
    <div>
      <button onClick={onClickMove1}>01 게시글로 이동하기</button>
      <button onClick={onClickMove2}>02 게시글로 이동하기</button>
    </div>
  );
}
