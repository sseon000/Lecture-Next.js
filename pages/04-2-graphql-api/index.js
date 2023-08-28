import { useMutation, gql, useQuery } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
        }
    }
`
/*
const FETCH_BOARD = gql`\
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
        }
    }
`
*/

export default function GraphqlApiPage(){
    const [createBoard] = useMutation(CREATE_BOARD)
    /*
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: "64ec9a44bfc0f900299a61b7"
        }
    })
    console.log(data);
    */

    const onClickAsyncApi = async () => {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: "영희",
                    password: "1234",
                    title: "안녕하세요1",
                    contents: "반갑습니다1",
                }
            }
        })
        console.log(result?.data?.createBoard._id);
        console.log(result?.data?.createBoard.writer);
        console.log(result?.data?.createBoard.title);
        console.log(result?.data?.createBoard.contents);
    }

    return (
        <>
            <button onClick={onClickAsyncApi}>GRAPHQL-API 요청하기!!</button>
        </>
    )
}