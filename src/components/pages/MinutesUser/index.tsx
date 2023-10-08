import { MinutesUserContainer } from './styles'

export const MinutesUser = () => {
  return (
    <MinutesUserContainer>
      <form>
        <input type="number" placeholder="Escreva um número" />

        <button>Confirmar</button>
      </form>
    </MinutesUserContainer>
  )
}
