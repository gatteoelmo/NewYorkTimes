import styled from "styled-components";

export const SideNavbarStyled = styled.div`
    position: fixed;
    top: 52px;
    height: 95vh;
    width: 100vw;
    background-color: white;
    transform: translateX(0);
    animation: slideDown 0.3s ease;
    padding: 20px 0px;

    input {
        width: 90%;
    }
    

    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 25px;

        ul {
            
            li {
                cursor: pointer;
                text-transform: uppercase;
                font-size: 18px;
                border-bottom: solid 1px rgba(0,0,0,0.1);
                padding: 5px 0px;
            }


        }
        }
    

    @keyframes slideDown {
            from {
                transform: translateX(-100%);
            }
            to {
                transform: translateX(0);
            }
        }
`