// library, frameworks.
import React from "react";
import styled from "styled-components";

// components
import Do from "./components/Do";
import DoMaker from "./components/DoMaker";

// styled components
const AppWrap = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;

  height : 100vh;

  background : #ffd57e;
  `;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;

  padding : 20px;
  border-radius : 5px;
  background: #fca652;
  color: #ac4b1c;
  `;

const DoContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-contents : center;

  padding : 10px;
  margin : 30px 0; 
  border-radius : 5px;

  background : #ffefa0;
  `;

const Credit = styled.p`
  font-size : 1em;
  color : #fca652;
  `;

// 'App' COMPONENT
class App extends React.Component {
  
  componentDidMount() {

  }


  render() {
    return (
      <AppWrap className="App">

        <header className="App-header">
          <Title className="title">Jindo</Title>
        </header>

        <content>
          <DoMaker />
          <DoContainer>
            <Do />
          </DoContainer>
        </content>

        <footer>
          <Credit>Wonjin Yi</Credit>
        </footer>
      </AppWrap>
    );
  }
}

export default App;
