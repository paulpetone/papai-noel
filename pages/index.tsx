import type { NextPage } from 'next'
import S from '../styles/home'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <S.Container>
      <Header />
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
