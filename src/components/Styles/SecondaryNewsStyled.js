import styled from "styled-components";

export const SecondaryNewsStyled = styled.div`
    margin: 15px;
    
    div {
        
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.5);
        padding-bottom: 10px;

        a {
            text-decoration: none;
            color: black;
            display: flex;
            flex-direction: row;  
            flex-wrap: wrap;
        }
        
        h4 {
                margin-bottom: 15px;
                font-size: 13px;
        }
    
        h3 {
            margin-bottom: 10px;
    }

        p {
            font-size: 14px;
            color: rgba(0,0,0,0.7);
            margin-bottom: 10px;
        }

        img {
            margin-bottom: 10px;
        }
    }

`