import React from 'react';
import { HeaderStyle } from "./Header.style"
import LogoDaAgencia from "../../assets/logo.agencia.png"
import carrinho from "../../assets/carrinho.png"

const Header = (props) => {

const {setInicio} = props

    return (
        <HeaderStyle>
            <div>
                <div className='logo'>
                    <img src={LogoDaAgencia} alt="logo da marca" />
                </div>

                <div className='nome-do-site'>
                    <h1>Viagens Espaciais</h1>
                    <h3>Agende sua viagem espacial conosco</h3>
                </div>
                <div className='carrinho'>
                    <button onClick={()=>setInicio ("Carrinho")}>
                        <img src={carrinho} alt="carrinho de compras" />
                    </button>
                </div>
                <div className='tela-dos-cards'>
                    <button onClick={ ()=> setInicio ("CardsRender")}>
                       Voltar
                    </button>
                </div>
            </div>


        </HeaderStyle>
    )
}
export default Header