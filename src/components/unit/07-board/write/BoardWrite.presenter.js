import * as S from './BoardWrite.styles'

export default function BoardWirteUI(props) {
    return (
        <>
            판매자: <input type="text" onChange={props.onChangeSeller}/><br />
            상품명: <input type="text" onChange={props.onChangeName}/><br />
            상품내용: <input type="text" onChange={props.onChangeDetail}/><br />
            상품가격: <input type="text" onChange={props.onChangePrice}/><br />
            <S.SubmitButton isDone={props.isDone} onClick={props.onClickRegProduct}>상품 등록</S.SubmitButton>
        </>
    )
}