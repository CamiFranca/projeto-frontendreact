import styled from "styled-components";

export const ContainerCarrinho = styled.div`
width:70%;
display: flex;
margin: 0 32px;
padding:36px 0px;
gap:20px;
justify-content:space-between;
align-items:color-interpolation-filters;
min-height:500px;

/* .igame-e-texto{
     width:60%;
     img{
        display:flex;
        justify-content:flex-start;
     }
} */
.total{
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    color:white;
 
}
.preço{
    font-style:bold;
}
.aviso{
  font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    color:white;
}
`

export const StyleCarrinho = styled.section`
display:flex;
justify-content:center;
align-items: center;
margin-bottom:24px;
color:white;
border-left:1px solid rgba(255,255,255,0.5);
border-top:1px solid rgba(255,255,255,0.5);
box-shadow:20px 20px 50px rgba(0,0,0,5);
background-color:rgba(255,255,255,0.1);
font-family: 'Open Sans', sans-serif;
min-width:60%;
position:relative;
-webkit-box-shadow: 9px 12px 19px -7px rgba(0,0,0,0.59);
-moz-box-shadow: 9px 12px 19px -7px rgba(0,0,0,0.59);
box-shadow: 9px 12px 19px -7px rgba(0,0,0,0.59);



section{
display:flex;
align-items:center;
height:175px;
width:90%;

}


.texto{
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:flex-start;
  padding-left: 300px;

}
p {
 margin:4px;
 font-size:16px;
 color:white;

}

.viagem, .preço, .quantidade{
font-weight: bold;
font-family: 'Open Sans', sans-serif;
}

button{
margin:16px 16px 8px 16px;
padding: 8px 10px ;
margin-top:15px;
border-radius:3px;
border-style:none;
font-weight:500;
background-color:white;
border:solid 2px #121212;
box-shadow: 4px 4px #121212;
transition: transform 50ms,
box-shadow 50ms;
:hover{
cursor:pointer;
transform:translate(1px,1px);
box-shadow: 2px 2px #121212;
}
}
.imagem{
position:absolute;
height:175px;
width:222px;
overflow-y:hidden;
img{
object-fit:cover;
height:100%;
width:100%;
}

}

`
