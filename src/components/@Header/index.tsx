import { Sun } from 'phosphor-react'
import { defaultTheme } from '../styles/themes/default'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <button>
        <Sun size={32} color={defaultTheme['gray-100']} weight="bold" />
      </button>
    </HeaderContainer>
  )
}
