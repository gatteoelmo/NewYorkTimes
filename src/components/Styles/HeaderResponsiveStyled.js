import styled from "styled-components";

export const HeaderResponsiveStyled = styled.header`
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
    background-color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    margin: initial;
    box-sizing: border-box;
    z-index: 3;

    div {
        display: flex;
        justify-content: space-between;

        button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            height: 35px;
            width: 35px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;
        }

        }
        
        .headerTop {
            height: 52px;
            padding: 10px 15px 6px;
            border-bottom: 1px solid #EAE9EC; 
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: white;
            
            button:hover {
           
                background: #EAE9EC70;
                    
            }
            .options {
                flex: 1;
        }
        
        .logo {
         flex: 2;
         justify-content: center;

         img {
             object-fit: contain;
         }
        };

        .account {
            flex: 1;
            margin-right: 15px;
            justify-content: end;
        };      

          
    }

    .headerCenter {
        
        height: 38px;
        padding: 13px 20px 12px;
        border-bottom: 1px solid #EAE9EC;
        font-size: 10px;
        font-weight: 700;
        background: transparent;
        overflow: hidden;
        margin-top: 52px;

        p {
            overflow: hidden;       
        }

        button {
            font-size: 10px;
            height: 100%;
            width: 100%;
            margin-right: 15px;
        }

        button:last-child {
            color: #6480A6;
        }
    }
`