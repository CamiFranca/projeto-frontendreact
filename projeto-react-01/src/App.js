import React, { useEffect } from 'react';
import { useState } from 'react';
import { GlobalStyle } from './globalStayle';
import Header from "./componentes/Header/Header";
import Carrinho from "./componentes/Carrinho/Carrinho"
import SecondHeader from "./componentes/Second-header/Second-header"
import { MainStyle } from './componentes/Main/Main.style';
import CardsRender from './componentes/CardsRender/CardsRender';
import Footer from "./componentes/Footer/Footer"




function App() {

  const pegar = JSON.parse( localStorage.getItem("itens"))
  console.log(pegar)
  const [buscaMenorValor, setBuscaMenorValor] = useState(Number(-Infinity))
  const [buscaMaiorValor, setBuscaMaiorValor] = useState(Number(Infinity))
  const [buscaPorNome, setBuscaPorNome] = useState("")
  const [ordenar, setOrdenar] = useState("")
  const [inicio, setInicio] = useState('CardsRender')
  const [compraCarrinho, setCompraCarrinho] = useState([...pegar])


  useEffect(()=>{
localStorage.setItem("itens", JSON.stringify(compraCarrinho))
  },[compraCarrinho])

 

  const iniciar = () => {
    switch (inicio) {
      case "CardsRender":
        return <CardsRender
          buscaMenorValor={buscaMenorValor}
          buscaMaiorValor={buscaMaiorValor}
          buscaPorNome={buscaPorNome}
          ordenar={ordenar}
          setOrdenar={setOrdenar}
          compraCarrinho={compraCarrinho}
          setCompraCarrinho={setCompraCarrinho}
       
        />
      case "Carrinho":
        return <Carrinho
          compraCarrinho={compraCarrinho}
          setCompraCarrinho={setCompraCarrinho} />
      default:
        return <div>Tela não existente</div>
    }

  }


  return (

    <>
      <GlobalStyle />
      <Header
      setInicio={setInicio}
      quantidadeNoCarrinho = {compraCarrinho.length}
      />
      {inicio === 'CardsRender' ?

        <SecondHeader
          ordenar={ordenar}
          setOrdenar={setOrdenar}
          buscaMenorValor={buscaMenorValor}
          setBuscaMenorValor={setBuscaMenorValor}
          buscaMaiorValor={buscaMaiorValor}
          setBuscaMaiorValor={setBuscaMaiorValor}
          buscaPorNome={buscaPorNome}
          setBuscaPorNome={setBuscaPorNome}
        />
        :
        ""


      }

      <MainStyle >
        {iniciar()}
      </MainStyle>
      <Footer />
    </>

  );
}

export default App;
