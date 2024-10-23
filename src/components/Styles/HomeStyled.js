import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 3.7vw;
  max-width: 1300px;
  overflow: hidden;
  margin-top: 20px;

  .principal {
    // background-color: red;
    flex: 2; 
    height: 1000px;
    // width: 400px;
    padding-right: 20px;
    border-right: 1px solid #EAE9EC;

  }

  .secondary {
    // background-color: blue;
    flex: 1; 
    height: 600px;
    // width: 300px;
    padding-left: 20px;

  }
`