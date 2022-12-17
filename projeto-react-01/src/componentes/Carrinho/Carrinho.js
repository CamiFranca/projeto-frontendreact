import React from 'react'
import { ContainerCarrinho } from "./Carrinho.style"
import { StyleCarrinho } from './Carrinho.style'
import { useEffect, useState } from 'react'
import { priceFormatter } from "../../utilitarios/Moeda.js"

export function Carrinho(props) {

    const { compraCarrinho, setCompraCarrinho } = props

    const [precoTotal, setprecoTotal] = useState(0)

    useEffect(() => {
        let soma = 0
        for (const i of compraCarrinho) {
            soma += i.quantidade * i.preço
        }
        setprecoTotal(soma)
    }, [compraCarrinho])

    const deletarDoCarrinho = (produto) => {
        const novoCarrinho = [...compraCarrinho] // porque fazer o spread?
        const arraySemProduto = novoCarrinho.filter((item) => {
            item.quantidade = 1
            return item.id !== produto.id

        })

        setCompraCarrinho(arraySemProduto) //não entendi porque o setcompra precisa atualizar arraysemproduto.

    }
    return (

        <ContainerCarrinho >
            {compraCarrinho.length === 0 ? <span className='aviso'>Seu carrinho está vazio! </span> :
                <>
                    <section className='imagem-e-texto'>
                        {compraCarrinho.map((itens) => {

                            return (

                                <StyleCarrinho key={itens.id}>

                                    <section >
                                        <div className='imagem'>
                                            <img src={itens.img} alt="imagens da viagem" />
                                        </div>
                                        <div className='texto'>
                                            <div> <span className='viagem'>Viagem:</span> <span> {itens.viagem}</span> </div>
                                            <div><span className="preço" >Preço: </span><span>{priceFormatter.format(itens.preço)}</span></div>
                                            <div><span className="quantidade" > Quantidade: </span><span>{itens.quantidade}</span></div>
                                            <button onClick={() => deletarDoCarrinho(itens)}>Deletar</button>
                                        </div>
                                    </section>
                                </StyleCarrinho>

                            )
                        })}

                    </section>
                    <div className='total'>
                        <div><span className="preço" >Total: <span>{priceFormatter.format(precoTotal)}</span> </span></div>
                    </div>
                </>
            }

        </ContainerCarrinho>


    )

}


export default Carrinho