import * as S from "./BoardDetail.styles"

export default function BoardDetailUI(props) {
    return (
        <>
            <h1>게시판 상세 화면입니다!!</h1>
            <div>-----------------------------</div>
            <div>
                {/* {data?.fetchProduct.name} */}
                {!props.data ? 
                    'loading...' : 
                    (<div>
                        <span style={S.margin}>{props.data.fetchProduct._id.slice(0,4)}</span> 
                        <span style={S.margin}>{props.data.fetchProduct.seller}</span>
                        <span style={S.margin}>{props.data.fetchProduct.name}</span>
                        <span style={S.margin}>{props.data.fetchProduct.detail}</span>
                        <span style={S.margin}>{props.data.fetchProduct.price}</span>
                        <span style={S.margin}>{props.data.fetchProduct.createAt}</span>
                    </div>)}
            </div>
        </>
    )
}