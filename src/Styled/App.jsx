import styled from 'styled-components';

const AppIMG = styled.div`
margin:auto;
width:400px;
height:400px;
background-color:yellow;
`
const AppNAV = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10.5593px 36.5176px;
background:black;
position: absolute;
width: 100%;
left: 0px;
top: 0px;
height:70px;

`
const AppHeader = styled.div`
background:black;
width:100%;
display:flex;
margin-button:5rem;
`
const AppLin = styled.div`
position: static;
width: 170px;
height: 20px;
left: 0px;
top: 0px;
display:flex;
font-family: Inter;
font-style: normal;
font-weight: bold;
line-height: 8px;
text-align: center;
`
const AppCarru = styled.div`
position: absolute;
width: 1605.01px;
height: 152.23px;
left: 34.32px;
top: 59.84px;
`

const AppCard = styled.div`
width:250px;
height:400px;
text-align:center;
align-items: center;
border-radius:1px black;
margin:auto;
`

const AppTitle = styled.h1`
position: static;
width: 100%;
height: 25.52px;
left: 0px;
top: 0px;
font-size:40px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
line-height: 26px;
margin-left:2rem;
letter-spacing: -0.005em;
color: #FFFFFE;
`
export const IMG = AppIMG
export const NAV = AppNAV
export const Header = AppHeader
export const Lin = AppLin
export const Carru = AppCarru
export const Card = AppCard
export const H1 = AppTitle