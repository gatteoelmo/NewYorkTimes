import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 3.7vw;
  max-width: 1300px;
  // overflow: hidden;
  margin-top: 20px;

  .principal {
    // background-color: red;
    flex: 2; 
    height: auto;
    // width: 400px;
    padding-right: 0px;
    border-right: 1px solid #EAE9EC;

    .loadMore {
      display: flex;
      justify-content: center;
    
    button {
      margin: 20px;
      padding: 10px;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
      
    }

    

  }

  .secondary {
    flex: 1; 
    height: auto;
    padding-left: 0px;

  }
`