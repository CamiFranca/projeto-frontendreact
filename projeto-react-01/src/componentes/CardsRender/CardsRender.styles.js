import styled from "styled-components";

export const StyleCard = styled.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
margin-bottom:32px;
margin-top: 24px;
color:white;
padding:8px;
border-left:1px solid rgba(255,255,255,0.5);
border-top:1px solid rgba(255,255,255,0.5);
box-shadow:20px 20px 50px rgba(0,0,0,5);
background-color:rgba(255,255,255,0.1);
font-family: 'Open Sans', sans-serif;
height:460px;
width:320px;


-webkit-box-shadow: 9px 12px 19px -7px rgba(0,0,0,0.59);
-moz-box-shadow: 9px 12px 19px -7px rgba(0,0,0,0.59);
box-shadow: 9px 12px 19px -7px rgba(0,0,0,0.59);
.zoom{ 
overflow:hidden;

}

.zoom img{
width:100%;
transition:05s;
}
.zoom:hover img{
transform:scale(1.5); 
} 
p {
  margin:4px;
 font-size:16px;
 color:white;

}
img{
  margin-bottom:16px;
  height:275px;
  width:322px;
}
.viagem, .tema, .preço{
  font-weight: bold;
  margin-right:8px;
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
}
button:hover{
cursor:pointer;
transform:translate(1px,1px);
box-shadow: 2px 2px #121212;
}

 `

export const ContainerCard = styled.div`

width:70%;
display: flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
gap:10px;
padding:36px 0px;

`