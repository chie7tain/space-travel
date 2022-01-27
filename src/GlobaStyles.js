import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:"Barlow", sans-serif;
}
:root{
  --primary-grey:#D0D6F9;
  --white:#FFFFFF;
  --fontSuperBig:2.5rem;
  --fontBig:1.5rem;
  --fontMedium:1.2rem;
  --fontSmall:1rem;
  --fontSuperSmall:0.8rem;
}
    `;
