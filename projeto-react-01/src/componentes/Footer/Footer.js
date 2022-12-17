import React from 'react';
import { StyleFooter } from "./Footer.style"
import githubFooter from "../../assets/githubFooter.png"
import pinterestFooter from "../../assets/pinterestFooter.png"
import whatsappFooter from "../../assets/whatsappFooter.png"
import instagramFooter from "../../assets/instagramFooter.png"
import linkedinFooter from "../../assets/linkedinFooter.png"
import telefone from "../../assets/telefone.png"
import callCenter from "../../assets/callCenterDois.png"




function Footer() {
    return (
        <StyleFooter>
            <div className='informações-footer'>
                <div className='teste'>
                    <p>Redes sociais:</p>

                    <div className='uma-rede-social'>
                            <a href="https://github.com/settings/profile" rel="noopener noreferrer" target="_blank" > <img src={githubFooter} alt="icone do github" /> </a>
                       
                    </div>

                    <div className='uma-rede-social'>
                            <a href="https://www.linkedin.com/in/camilla-fran%C3%A7a-574721205/" rel="noopener noreferrer" target="_blank" > <img src={linkedinFooter} alt="icone do github" /> </a>
                       
                    </div>

                    <div className='uma-rede-social'>
                            <a href="#" rel="noopener noreferrer" target="_blank" > <img src={whatsappFooter} alt="icone do github" /> </a>
                       
                    </div>

                    <div className='uma-rede-social'>
                            <a href="#" rel="noopener noreferrer" target="_blank" > <img src={instagramFooter} alt="icone do github" /> </a>
                       
                    </div>

                    <div className='uma-rede-social'>
                            <a href="#" rel="noopener noreferrer" target="_blank" > <img src={pinterestFooter} alt="icone do github" /> </a>
                       
                    </div>

                </div>

                <div className='pos-venda'>
                    <p>Pós venda:</p>
                    <img src={telefone} alt="icone de telefone"/>
                    <span>081 9-9796-5802</span>
                    <span>atendimento@espaaço.com</span>
                </div>

                <div className='vendas-footer'>
                    <p>Central de vendas:</p>
                    <img src={callCenter}alt="icone atendente de telemarketing"/>
                    <span>0800 123 123</span>
                </div>
            </div>

        </StyleFooter >

    )
}
export default Footer