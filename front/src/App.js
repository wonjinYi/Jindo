// library, frameworks.
import React from "react";
import styled from "styled-components";
import axios from "axios";


// components
import Do from "./components/Do";
import DoMaker from "./components/DoMaker";
import DoModal from "./components/DoModal";
import Loading from "./components/Loading";


// 'App' COMPONENT
export default class App extends React.Component {
  
  state = {
    isLoading : true, 

    formData : {
      name : "",
      content : "",
    },

    modalId : 0,
    modalName : '',
    modalContent : '',
    modalOpened : false,

    doList : [],
  };

  handleOpen = (id, name, content) => {
    this.setState(prevState=>({
      modalId : id,
      modalName : name,
      modalContent : content,
      modalOpened : true,
    }));
    console.log(id, name, content);
  };

  handleClose = () => {
    this.setState(prevState=>({
      modalOpened: false
    }));
  };

  updateFormData = (formName, formContent) => {
    this.setState({isLoading : true});
    this.setState( () => ({
      formData : {
        name : formName,
        content : formContent,
      }
    }), this.createDo)
    
  }

  // API request
  getDo = async () => {
    //this.setState({isLoading : true});
    const { data : { data } } = await axios.get("https://jindoback.wonj.in/data");
    console.log(data);
    this.setState( {
      doList : data,
      isLoading : false,
    });
  }

  createDo = async () => {
    const { formData } = this.state;
    console.log(this.state.formData.name, this.state.formData.content);
    console.log(formData);
    await axios.post("https://jindoback.wonj.in/create", formData);
    await this.getDo();
  }

  editDo = async () => {

  }

  deleteDo = async () => {
    const { modalId } = this.state;

    this.handleClose();
    this.setState( {
      isLoading : true,
    });
    await axios.post("https://jindoback.wonj.in/delete", { id : modalId } );

    await this.getDo();
  }
  // createDo = async (name, content) => {
  //   const { modalName, modalContent } = this.state;
    
  //   const create = await axios.post(
  //     "http://wonjinyi.iptime.org/create",
  //     {modalName, modalContent}
  //   );
  // }

  //
  componentDidMount() {
    this.getDo();
  }


  render() {
    const { isLoading, doList, modalName, modalContent,  modalOpened } = this.state;

    return (
      <AppWrap className="App">
        <Title className="title">Jindo</Title>

        <DoMaker updateFormData={this.updateFormData} />

        {
          isLoading 
          ? <Loading />
          : ''
        }

        <DoContainer>
        { 

            ( () => {
              const children = [];
              for(let i=doList.length-1; i>=0; i--){
                children.push( <Do key={i} id={doList[i].id} setModalInfo={this.handleOpen} name={doList[i].name} content={doList[i].content} /> );
              }
              return children;
            })()


        }
        </DoContainer>

        <DoModal modalOpened={modalOpened} handleClose={this.handleClose} deleteDo={this.deleteDo} name={modalName} content={modalContent} />

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

