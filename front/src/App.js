// library, frameworks.
import React from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Do from "./components/Do";
import DoMaker from "./components/DoMaker";
import DoModal from "./components/DoModal";

// 'App' COMPONENT
export default class App extends React.Component {
  
  state = {
    modalName : '',
    modalContent : '',
    modalOpened : false,

    // doList : [
    //   {"name":"wonjin", "content":"테스트입니다테스트스트"},
    //   {"name":"wonjin", "content":"testtttetetsetsetsetset"},
    //   {"name":"좀 긴 이름임니다", "content":"긴글테스트 긴글긴글 길다길어길어길어 긴글이다 긴글 기이이이일어 길어길어 길면 기차긴글테스트 긴글긴글 길다길어길어길어 긴글이다 긴글 기이이이일어 길어길어 길면 기차"},
    //   {"name":"wonjin", "content":"오후5시에 해킹"},
    // ],

    doList : [],
  };

  handleOpen = (name, content) => {
    this.setState(prevState=>({
      modalName : name,
      modalContent : content,
      modalOpened : true,
    }));
    this.getData();
  };

  handleClose = () => {
    this.setState(prevState=>({
      modalOpened: false
    }));
  };

  getData = async () => {
    const { data : { data } } = await axios.get("http://wonjinyi.iptime.org:8080/data");
    console.log(data);
    this.setState( {
      doList : data,
    });
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    const { doList, modalName, modalContent,  modalOpened } = this.state;

    return (
      <AppWrap className="App">
        <Title className="title">Jindo</Title>

        <DoMaker />

        <DoContainer>{ 
          ( () => {
            const children = [];
            for(let i=0; i<doList.length; i++){
              children.push( <Do key={i} setModalInfo={this.handleOpen} name={doList[i].name} content={doList[i].content} /> );
            }
            return children;
          })()
        }</DoContainer>

        <DoModal modalOpened={modalOpened} handleClose={this.handleClose} name={modalName} content={modalContent} />

        <Credit>Wonjin Yi</Credit>
      </AppWrap>
    );
  }
}

// styled components
const AppWrap = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
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
  max-width : 50%;

  padding : 10px;
  margin : 30px 0; 
  border-radius : 5px;

  background : #ffefa0;
  `;

const Credit = styled.p`
  font-size : 1em;
  color : #fca652;
  `;

