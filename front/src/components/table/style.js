import styled from "styled-components";

export const contain = styled.main`
display: flex;
flex-direction: column;
padding: 0px;
position: absolute;
width: 1177px;
height: 214px;
left: 336px;
top: 176px;
`
export const headeSection = styled.section`
position: static;
display: flex;
margin-left:30px;
justify-content: flex-start;
width: 1177px;
height: 22px;
left: 0px;
top: 0px;
`
export const span = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
color: #A1A8B8;
border-radius: 4px;
padding-left: ${(props => props.pad )};

`
export const  sectionLines = styled.div`
display: flex;
width: 1177px;
height: 48px;
justify-content: flex-start;
left: 0px;
top: 38px;
align-items: center;
background: #FFFFFF;
border: 1px solid #DFE2EB;
box-sizing: border-box;
border-radius: 6px;
flex-grow: 0;
margin: 16px 0px;
color:#4D5566;
`
const colores ={
  RECEBIDO: "#00AD8C",
  PENDENTE: "red"

}
export const itensTable = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: ${(props) => props.font || "14px"};
line-height: 18px;
display: flex;
align-items: center;
color: ${(props) => colores[props.color] || props.colorC };
padding-left: ${(props => props.pad )};
`
export const button = styled.button`
display: flex;
flex-direction: row;
align-items: center;
width: 165px;
height: 32px;
padding: 8px 29px;
border-radius: 15%;
margin-left: 119px;
border: 1px solid #CAD3FF;
box-sizing: border-box;
border-radius: 24px;
background-color:rgba(255, 255, 255, 1) ;
`
export const p = styled.p`
width: 107px;
height: 16px;
left: 29px;
top: 8px;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
color: #727D94;
order: 0;
flex-grow: 0;
margin: 0px 0px;
font-size: 12px;
`