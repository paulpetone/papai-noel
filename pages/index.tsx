import type { NextPage } from 'next'
import S from '../styles/home'
import Header from '../components/Header'
import { useLazyQuery } from '@apollo/client'
import cepQuery from '../graphql/cepQuery'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface IEvent {
  target: {
    value: string;
  }
}

const Home: NextPage = () => {
  const router = useRouter()
  const [cepInput, setCepInput] = useState('')
  const [executeQuery, { data }] = useLazyQuery(cepQuery)
 
  useEffect(() =>{
    if (data?.getResult) {
      const { shouldReceivePresent } = data.getResult
      router.push(`/resultado?success=${shouldReceivePresent}`)
    }
  }, [data])

  const updateCepInput = (e: IEvent) =>{
    setCepInput(e.target.value)
  }

  const onCepSubmit = () => {
    executeQuery(
      {
        variables: {
          cep: cepInput
        }
      }
    )
  }

  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.Grid>
          <S.Input type="text" name="cep" id="cep" onChange={updateCepInput} />
          <S.Card onClick={onCepSubmit}>
            <h2>Ir para o resultado</h2>
            <p>Alá noel</p>
          </S.Card>
        </S.Grid>
      </S.Main>

    </S.Container>
  )
}

export default Home
