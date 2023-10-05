import styled from 'styled-components'

export const BodyTimerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const TimerContainer = styled.span`
  color: ${(props) => props.theme['gray-100']};

  font-size: 6rem;
  margin: 0 2rem 2rem 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
`

export const Icons = styled.div`
  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 9999px;

  padding: 1.375rem 2.5rem;

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
`
