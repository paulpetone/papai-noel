import type { NextPage } from 'next'
import S from '../styles/home'


const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Main>
        <S.Grid>
          <S.Card
            href="/resultado"
          >
            <h2>Ir para o resultado</h2>
            <p>Alá noel</p>
          </S.Card>
        </S.Grid>
      </S.Main>

    </S.Container>
  )
}

export default Home
