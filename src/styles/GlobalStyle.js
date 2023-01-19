import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
:root{
  --main-color: #C44B3F;
  --bgc-color: #f4f4f4;
}
html{
    box-sizing: border-box;
}
*, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
body{
    font-family: 'Montserrat',' Black Ops One', cursive, sans-serif;
}
a, button{
    font-family: 'Montserrat', sans-serif;
}
h1,h2, h3, h4, h5 {
  font-family: 'Black Ops One';
}
.content{
  background-color: var(--bgc-color);
  min-height: calc(100vh - 81px);
}
.logo-img{
  transform: rotate(45deg);
  user-select: none;
}
.section {
  padding: 5rem 0;
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
}
.btn {
    width: 120px;
    height: 40px;
    border: 2px solid var(--main-color);
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    transition: color 0.4s cubic-bezier(.56,0,.41,1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #C44B3F;
    z-index: 1;
    &::before{
        position: absolute;
        content: '';
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: var(--main-color);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.4s cubic-bezier(.56,0,.41,1);
        z-index: -1;
    }
    &:hover::before{
        transform: translate(-50%, -50%) scale(1);
    }
    &:hover{
        color: var(--bgc-color);
    }
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
@media (min-width: 576px){
  .btn{
    width: 200px;
    height: 50px;
    font-size: 22px;
  }
}
`;
