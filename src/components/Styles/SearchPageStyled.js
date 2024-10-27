import styled from "styled-components";

export const SearchPageStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 3.7vw;

section {
        margin: 30px 0px;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        justify-content: start;
        align-items: start;

        article {
            margin-top: 15px;
            padding-bottom: 10px;
            border-bottom: solid 1px rgba(0,0,0,0.1);
            width: 100%;

            h2 {
                margin-bottom: 10px;
                font-size: 22px;
                font-weight: 600;
            }

            p {
                font-size: 16px;
                font-weight: 300;
                padding: 5px;
            }

            .article-info {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;

                .section {
                    background-color: rgba(0,0,0,0.1);
                }
            }
        }
}

div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}

hr {
    width: 90%;
    height: .5px;
    background-color: rgba(0,0,0,0.1);
    border: none;
}
.search-bar {
    height: 150px;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        .search-input {
            display: flex;

            
            input {
                background: none;
                border: solid 1px rgba(0,0,0,0.1);
                border-radius: 10px;
                height: 40px;
                width: 30vw;
                min-width: 250px;
                padding: 0px 10px;
                font-size: 18px;   
                transition: 0.5s;
            }
        }

        .sort-select {

            select {background: none;
                border: solid 1px rgba(0,0,0,0.1);
                border-radius: 10px;
                cursor: pointer;
                height: 40px;
                padding: 0px 10px;
                transition: 0.5s;
                box-shadow: inset 1px 1px 5px rgba(0,0,0,.05);}
            
        }
        

        input:hover {
            box-shadow: inset 1px 1px 5px rgba(0,0,0,.05);
        }

        input:focus {
            outline: none;
            box-shadow: inset 1px 1px 5px rgba(0,0,0,.05);
        }

        button {
            background: transparent;
            border: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;
            margin-left: 10px;
            font-size: 20px;
            color: rgba(0,0,0,0.7);
        }

        button:hover {
            box-shadow: inset 1px 1px 5px rgba(0,0,0,.08);
        }



    }

} 

`