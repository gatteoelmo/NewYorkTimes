import styled from "styled-components";

export const SearchBarStyled = styled.form`

            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            height: 38px;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            

            input {
                background: none;
                border: solid 1px rgba(0,0,0,0.7);
                border-radius: 4px;
                cursor: pointer;
                height: 90%;
                min-width: 190px;
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
        
`