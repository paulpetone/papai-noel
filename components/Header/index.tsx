import type { NextPage } from "next";
import S from './styles';


const Header: NextPage = () =>{
    return (
        <S.Container>
        <S.Main>
            <S.Title>
            <h2>Quem será que vai ganhar presente?</h2>
            <h4>Coloque seu cep e descubra-ho-hohô..</h4>
            </S.Title>
        </S.Main>
        </S.Container>
    )
}

export default Header;