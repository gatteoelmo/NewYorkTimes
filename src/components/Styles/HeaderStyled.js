import styled from "styled-components";

export const HeaderStyled = styled.header`
    margin: 0 auto;
    padding: 0px 3.7vw;
    max-width: 1300px;
    overflow: hidden;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;

    div {
        display: flex;
        justify-content: space-between;
    }

    .topBar {
        display: flex;
        list-style: none;
        gap: 20px;
        align-items: center;
        justify-content: center;

        
        
        li {
            cursor: pointer;
            text-transform: uppercase;
        }
    }

    .headerTop {
        height: 50px;
        padding: 4px 0px 8px;

        div {
            width: 25%;
        }

        div:first-child {

        display: flex;
        justify-content: start;
            
        .search {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            height: 38px;
            width: 38px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;
            margin-right: 10px;
            }

        .search:hover {
            background: #EAE9EC70;
                
        }

        form {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            height: 38px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;

            input {
                background: none;
                border: solid 2px rgba(0,0,0,0.9);
                border-radius: 4px;
                cursor: pointer;
                height: 90%;
                min-width: 200px;
                padding: 0px 10px;
                font-size: 18px;
            }

            button {
                background: #6480A685;
                cursor: pointer;
                color: white;
                height: 35px;
                width: 35px;
                border-radius: 10%;
                border: none;
                margin-left: 3px;
                font-size: 10px;
                font-weight: 700;
            }
        }
        }



        ul {
            margin-right: -10px;

            li  {
                font-size: 11px;
            }
        }

        div:last-child {
            display: flex;
            justify-content: flex-end;
            gap: 20px;
        }

        .subscribe {
            background: #6480A6;
            color: white;
            padding: 0px 15px;
            height: 30px;
            border: none;
            border-radius: 5px;
            font-size: 11px;
            font-weight: bold;
            align-self: center;
            cursor: pointer;
        }



    }

    .headerCenter {
        height: 70px;

        div {
            flex: 1;
            flex-direction: column;
            justify-content: start;
            padding-top: 15px;
            gap: 5px;            
            }
            .logo {
                padding-top: 0px;
                flex: 2;
                
            img {
                object-fit: contain;
            }   
    }

    .line {
        width: 100%;
        height: 0px;
        border: 0.5px solid #00090;
        margin-top: 1px;
    }

    
    }
    
`;