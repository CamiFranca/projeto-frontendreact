import React from 'react';
import cards from "../../assets/cards.json"
import { priceFormatter } from '../../utilitarios/Moeda.js';
import { StyleCard, ContainerCard } from "./CardsRender.styles"


export default function CardsRender(props) {
 
  const {
    buscaMenorValor,
    buscaMaiorValor,
    buscaPorNome,
    ordenar,
    compraCarrinho,
    setCompraCarrinho } = props



  const adcCarrinho = (produto) => {
    const novoCarrinho = [...compraCarrinho]
    const encontrarItens = novoCarrinho.find((item) => {
      return item.id === produto.id
    
    })
  if (!encontrarItens){
    novoCarrinho.push(produto)
  }else{
    produto.quantidade++
  }
  setCompraCarrinho(novoCarrinho)
  console.log(compraCarrinho)

  }


  return (

    <ContainerCard>
      {cards
        .filter((itens) => { return buscaMenorValor <= itens.preço })
        .filter((itens) => { return buscaMaiorValor >= itens.preço })
        .filter((itens) => { return itens.viagem.toLowerCase().includes(buscaPorNome.toLowerCase()) })
        .sort((a, b) => {

          if (ordenar === "crescente") {

            return a.preço > b.preço ? 1 : -1;

          } else if (ordenar === "decrescente") {
            return a.preço < b.preço ? 1 : -1;

          }
        })

        .map((itens) => {

          return (
            <StyleCard key={itens.id}>
              <div className='zoom'>
                <img src={itens.img} alt="imagens da viagem" />
              </div>
              
              <div> <span className='viagem'>Viagem:</span> <span> {itens.viagem}</span> </div>

              <div><span className="tema">Tema:</span><span>{itens.tema}</span></div>

              <div><span className="preço">Preço:</span><span>{priceFormatter.format(itens.preço)}</span></div>

              <button onClick={() => adcCarrinho(itens)} >
                Adicionar ao carrinho
              </button>
            </StyleCard>

          )
        }

        )}

    </ContainerCard>

  )

}
