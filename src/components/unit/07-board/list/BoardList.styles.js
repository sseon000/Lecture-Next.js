import styled from '@emotion/styled'

export const SubmitButton = styled.button`
    background: ${(props) => (props.isDone ? 'yellow' : 'gray')}
`

export const WrpperItem = styled.div`
    width: 500px;
    height: 30px;
    border: 1px solid black;
    margin-bottom: 10px;
`

export const CheckBoxItem = styled.input`
       
`

export const Item = styled.span`
    margin-right: 10px;
`

export const DeleteButton = styled.button`
    background-color: red;
    font-color: white;
`