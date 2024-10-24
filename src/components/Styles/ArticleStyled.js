import styled from "styled-components";

export const ArticleStyled = styled.div`
    margin:  15px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    

    a {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: row;  
        flex-wrap: wrap;

        
        .content {
            flex: 1;
            margin-right: 15px;
            min-width: 200px;

            h4 {
                margin-bottom: 35px;
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


        }
    
        .image {
            flex: 2;
            min-width: 300px;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    } 


`