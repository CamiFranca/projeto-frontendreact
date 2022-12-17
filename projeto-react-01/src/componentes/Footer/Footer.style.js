import styled from "styled-components";

export const StyleFooter = styled.footer `
display: flex;
height:100px;
width:100vw;
align-items:center;
justify-content: center;
background-color:#2E2E39;
color:#000;
box-shadow:inset 6px 6px 13px 0px black;

img{
height:30px;
width:30px;
margin:4px;
}
button{

border:none;
   
}
.teste{
    display:flex;
    justify-content: space-between;
    align-items:center
}
.informações-footer{
display:flex;
align-items:center;
justify-content: center;
color:white;
}
.uma-red-social{
    background-color:#2E2E39;
}

.pos-venda{
    display:flex;
    margin-left: 16px;
    margin:0 52px;
    align-items:center;
    justify-content: space-between;
   
}
span{
    margin:4px;
}
p{
    font-weight: bold;
    margin-right:8px;
}
.vendas-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;

   
}

` 