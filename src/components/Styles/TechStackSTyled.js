import styled from "styled-components";

export const TechStackStyled = styled.div`
        max-height:150px;
        min-height: 100px;width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: space-between;        
        max-width: 1300px;
        margin: 0 auto;        

            h4 {
                font-weight: 400;
            }
    
            li {
                font-size: 15px;
                font-weight: 300;
            }

            @media (max-width: 1200px) {
                max-height: 600px;
            }
        
`