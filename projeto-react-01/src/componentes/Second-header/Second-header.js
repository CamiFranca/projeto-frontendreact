import React from 'react';
import { StyleSecondHeader } from "./Second-header.style"


export default function SecondHeader(props) {
    const { ordenar,
        setOrdenar,
        buscaMenorValor,
        setBuscaMenorValor,
        buscaMaiorValor,
        setBuscaMaiorValor,
        buscaPorNome,
        setBuscaPorNome,
       } = props

    return (
        <StyleSecondHeader>

            <div>
                <select value={ordenar} onChange={(e) => setOrdenar(e.target.value)}>
                    <option value="">Ordenar </option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>

                <div className='input-single'>
                    <input className='input' type="number" value={buscaMenorValor} onChange={(event) => { setBuscaMenorValor(event.target.value) }}></input>
                    <label>Valor mínimo:</label>

                </div>
                <div className='input-single'>
                    <input className='input' type="number" value={buscaMaiorValor} onChange={(event) => { setBuscaMaiorValor(event.target.value) }}></input>
                    <label>Valor máximo:</label>
                </div>
                <div className='input-single'>

                    <input className='input' type="text" value={buscaPorNome} onChange={(event) => { setBuscaPorNome(event.target.value) }}></input>
                    <label>Pesquisa:</label>
                </div>
              
            </div>
        </StyleSecondHeader>
    )

}