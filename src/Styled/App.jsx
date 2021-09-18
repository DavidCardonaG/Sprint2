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
display:flex;
justifi-content:space-around;
width:350px;
height:400px;
text-align:center;
align-items: center;
border-radius:1px black;
margin-left:4rem;
margin:20px
margin-right:20px;
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

const TitleMas = styled.h1`
color:white;
text-align: center;
margin-top: 2rem;
font-size:40px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
text-decoration:underline;

`

const footerP = styled.div`
width:100%;
heigth:200px;
background-color:black;
text-align:center;
line-height:20px;
display :flex;
border-radius: 1px solid white;
justify-content: spacing-between;
`
const NameP = styled.h1`
color:white;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size:30px;
margin:auto;
margin-top:4rem;
`
const EmailP = styled.p`
color:white;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size:30px;
margin:auto;
`
const mainDetalles = styled.body`
  @import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
  font-size: 16px;
  background-color: rgba(46, 42, 42, 0.116);
  width: 800px;
  height: 500px;
  background: url('https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631932783/imagen_fondo_zvop03.png')
  margin-left: 200px;
  border-radius: 40px;
  display: flex;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid white;
`;
const Profile = styled.img`
  width: 280px;
  height: 320px;
  margin: 30px;
`;
const bx = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-left: 280px;
  margin-top: 30px;
  background-color: black;
  color: white;
  border: none;
`;
const titleDetalles = styled.h1`
  font-family: Montserrat;
  font-style: normal};
  font-weight: bold;
  font-size: 32px;
  color: #fffffe;
`;

const añoDetalles = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 58px;
letter-spacing: -0.005em;
color: #fffffe;

`;

const descripcionD = styled.p`
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-style: normal;
`;

const value = styled.p`
  color: #989898;
  font-size: 15px;
`;
export const Value = value;


export const IMG = AppIMG
export const NAV = AppNAV
export const Header = AppHeader
export const Lin = AppLin
export const Carru = AppCarru
export const Card = AppCard
export const H1 = AppTitle
export const H1M = TitleMas
export const FooterP = footerP
export const NamePe = NameP
export const EmailPe = EmailP
export const MainDetalles = mainDetalles;
export const ProfileM = Profile;
export const BX = bx;
export const TitleDetalles = titleDetalles;
export const AñoDetalles = añoDetalles;
export const DescripcionD = descripcionD;