import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_PRODUCTS } from "./BoardList.queries";

export default function BoardList() {
    const {data, refetch} = useQuery(FETCH_PRODUCTS);

    console.log(data?.fetchProducts)

    const onClickDelete = (event) => {
        console.log(event)
    }

    return (
        <BoardListUI 
            data={data}
            onClickDelete={onClickDelete}
        />
    )    
}