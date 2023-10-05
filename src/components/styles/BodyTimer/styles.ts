import styled from 'styled-components'

export const BodyTimerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border: solid red 1px;
`

export const Timer = styled.span`
  color: ${(props) => props.theme['gray-100']};

  font-size: 6rem;
`
