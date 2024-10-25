import styled from "styled-components";

export const SearchPageStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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