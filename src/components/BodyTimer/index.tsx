import { defaultTheme } from '../styles/themes/default'
import {
  BodyTimerContainer,
  ButtonsContainer,
  Icons,
  TimerContainer,
} from './styles'
import { PlayCircle, SpeakerLow, Timer } from 'phosphor-react'

export const BodyTimer = () => {
  return (
    <BodyTimerContainer>
      <TimerContainer>
        <span>25</span>
        <span>:</span>
        <span>00</span>
      </TimerContainer>

      <Icons>
        <ButtonsContainer>
          <button>
            <PlayCircle size={64} color={defaultTheme['green-light']} />
          </button>

          <button>
            <Timer size={64} color={defaultTheme['gray-100']} />
          </button>

          <button>
            <SpeakerLow size={64} color={defaultTheme['gray-100']} />
          </button>
        </ButtonsContainer>
      </Icons>
    </BodyTimerContainer>
  )
}
