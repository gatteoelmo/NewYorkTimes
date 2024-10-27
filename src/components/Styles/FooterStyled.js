import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    width: 100%;
    padding: 0px 3.7vw;
    max-width: 1300px;
    margin: 20px auto;

    .socialMedia {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        font-size: 25px;
        margin-top: 20px;
    }

    .logo {
        display: flex;
       justify-content: space-between;
       width: 100%;
       

        img {
            height: 40px;
        }
    }

    img {
        margin-bottom: 10px;
    }
    
    h6 {
        margin: 20px 0px;
        font-weight: 600;
        font-size: 18px;
    }
`