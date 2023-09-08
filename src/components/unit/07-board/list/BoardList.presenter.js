import * as S from './BoardList.styles'

export default function BoardListUI(props) {
    return (
        <>
            {props.data?.fetchProducts?.map(el => {
                return <S.WrpperItem id={el._id} key={(el._id).slice(0,4)}>
                            <S.CheckBoxItem type='checkbox' />
                            <S.Item>{(el._id).slice(0,4)}</S.Item>
                            <S.Item>{el.seller}</S.Item>
                            <S.Item>{el.name}</S.Item>
                            <S.Item>{el.detail}</S.Item>
                            <S.Item>{el.price}</S.Item>
                            <S.DeleteButton onClick={props.onClickDelete}>삭제</S.DeleteButton>
                        </S.WrpperItem>
                
            })}
        </>
    )
}