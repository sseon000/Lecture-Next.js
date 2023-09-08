import styled from '@emotion/styled'

export const SubmitButton = styled.button`
    background: ${(props) => (props.isDone ? 'yellow' : 'gray')}
`