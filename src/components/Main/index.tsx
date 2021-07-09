import * as S from './styles'

const Main = ({
  title = 'Tweets Dev',
  description = 'Um agregador de tweets/threads para te levar para o proximo nivel'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-llustration.svg"
      alt="Representação de blocos de interfaces de usuários e codigo"
    />
  </S.Wrapper>
)

export default Main
