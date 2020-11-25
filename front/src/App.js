// library, frameworks.
import React from "react";
import styled from "styled-components";

// components
import Do from "./components/Do";
import DoMaker from "./components/DoMaker";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  background: pink;
  color: white;
  `;

class App extends React.Component {
  
  componentDidMount() {

  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Title className="title">Jindo</Title>
        </header>

        <content>
          <p>아 lnx 적분하고싶다</p>
          <DoMaker />
          <Do />
        </content>

        <footer>
          <p>푸터 영역</p>
        </footer>
      </div>
    );
  }
}

export default App;
