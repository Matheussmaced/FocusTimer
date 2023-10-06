import { useState, useEffect } from 'react'

import { defaultTheme } from '../styles/themes/default'
import {
  BodyTimerContainer,
  ButtonsContainer,
  Icons,
  TimerContainer,
} from './styles'
import { PlayCircle, SpeakerLow, Timer } from 'phosphor-react'

export const BodyTimer = () => {
  const [secounds, setSecounds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(25)
  const [startTimer, setStartTimer] = useState<boolean>(false)

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        if (secounds > 0) {
          setSecounds(secounds - 1)
        } else {
          setSecounds(59)
        }

        if (secounds === 0) {
          setMinutes(minutes - 1)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [secounds, minutes, startTimer])

  function startNewCycleAndPause() {
    if (!startTimer) {
      setStartTimer(true)
    }

    return setStartTimer(!startTimer)
  }

  return (
    <BodyTimerContainer>
      <TimerContainer>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span>{secounds < 10 ? `0${secounds}` : secounds}</span>
      </TimerContainer>

      <Icons>
        <ButtonsContainer>
          <button onClick={startNewCycleAndPause}>
            <PlayCircle size={64} color={defaultTheme['green-light']} />
          </button>

          <button>
            <Timer size={64} color={defaultTheme['icons-color']} />
          </button>

          <button>
            <SpeakerLow size={64} color={defaultTheme['icons-color']} />
          </button>
        </ButtonsContainer>
      </Icons>
    </BodyTimerContainer>
  )
}
