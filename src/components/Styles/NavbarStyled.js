import styled from "styled-components";

export const NavbarStyled = styled.nav` 
        nav {display: flex;
        justify-content: center;
        gap: 20px;
        background-color: white;
        height: 52px;}

        .navbarFixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            opacity: 1;
            transform: translateY(0);
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                transform: translateY(-100%);
            }
            to {
                transform: translateY(0);
            }
        }

        .navbarNone {
            display: none;
           
        }

        hr {
            width: 0px;
            border: 1px solid grey;
            height: 18px;
            align-self: center;
            opacity: 0.5;
        }


            ul {
                display: flex;
                list-style: none;
                gap: 20px;
                align-items: center;
        
                li {
                    cursor: pointer;
                }
            }

    
`