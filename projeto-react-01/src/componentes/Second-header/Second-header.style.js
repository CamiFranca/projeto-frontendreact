import styled from "styled-components";
export const StyleSecondHeader = styled.header`
display: flex;
align-items:center;
justify-content:center;
background-color:#2E2E39;
height: 15vh;




>div{
        width:70%;
         display:flex;
         align-items:center;
        justify-content:space-between;
           
    }
select{
    padding: 4px 16px; 
   
}
input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

div.input-single{
    height:100%;
    background-color:#2E2E39;
    position:relative;
   
}
div.input-single label{
    font-size: 16px;
    position:absolute;
    left:0;
    margin-bottom:5px;
    color: rgb(150,150,150);
    transition: 0.5s ease-in-out;
    background-color:#2E2E39;
    
}
 div.input-single .input{
    background-color:#2E2E39;
    padding:5px;
    color: rgb(150,150,150);
    border:0;
    border-bottom:2px solid rgb(200,200,200);
    outline:none;
    font-size:16px;
   
}
div.input-single .input:focus,
div.input-single .input:valid{
    border-bottom: 2px solid;
}
div.input-single .input:focus ~ label,
div.input-single .input:valid ~ label{
transform:translateY(-6px);
font-size:12px;

} 
.carrinho img{
    width: 30px;
    height:30px;
    background-color:#2E2E39;
}

`