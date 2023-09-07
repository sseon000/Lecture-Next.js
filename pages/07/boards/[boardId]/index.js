import BoardDetail from '../../../../src/components/unit/board/detail/BoardDetail.container'
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router"
import { FETCH_PRODUCT } from '../../../../src/components/unit/board/detail/BoardDetail.queries'

export default function BoardDetailPage(){
    console.log('/07/boards/상세')
    const router = useRouter();
    console.log(router.query.boardId);

    const {data, error} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.boardId
        }
    });

    console.log(data);
    if(error) return <div>에러발생!!</div>

    return <BoardDetail data={data}/>
}