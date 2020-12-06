// library, frameworks.
import React from "react";
import styled from "styled-components";
import axios from "axios";


// components
import Do from "./components/Do";
import DoMaker from "./components/DoMaker";
import DoModal from "./components/DoModal";
import Loading from "./components/Loading";
import EmptyListNoti from "./components/EmptyListNoti";

// 'App' COMPONENT
export default class App extends React.Component {

    state = {
        isLoading: true,

        formData: {
            name: "",
            memo: "",
        },

        modalData: {
            modalId: 0,
            modalName: '',
            modalMemo: '',
            modalOpened: false,
        },

        doList: [],
    };

    handleOpen = (id, name, memo) => {
        this.setState(prevState => ({
            modalData: {
                modalId: id,
                modalName: name,
                modalMemo: memo,
                modalOpened: true,
            }

        }));
        console.log(this.state.modalData);
    };

    handleClose = () => {
        this.setState(prevState => ({
            modalData: {
                modalId: 0,
                modalName: '',
                modalMemo: '',
                modalOpened: false
            }
        }));
    };

    updateFormData = (formName, formMemo, updateType, id) => {
        this.setState({ isLoading: true });

        if (updateType === "create") {
            this.setState(() => ({
                formData: {
                    name: formName,
                    memo: formMemo,
                }
            }), this.createDo);
        }
        else if (updateType === "edit") {
            this.setState({
                modalData: {
                    modalId: id,
                    modalName: formName,
                    modalMemo: formMemo,
                    modalOpened: true,
                },
            }, this.editDo);
        }
    }

    // API request
    getDo = async () => {
        const { data: { data } } = await axios.get("https://jindoback.wonj.in/data");
        console.log(data);
        this.setState({
            doList: data,
            isLoading: false,
        });
    }

    createDo = async () => {
        const { formData } = this.state;
        await axios.post("https://jindoback.wonj.in/create", formData);
        await this.getDo();
    }

    editDo = async () => {
        const { modalData } = this.state;
        
        console.log(modalData);
        await axios.post("https://jindoback.wonj.in/edit", modalData);

        await this.getDo();
    }

    deleteDo = async () => {
        const { modalData: {
            modalId
        } } = this.state;

        this.handleClose();
        this.setState({
            isLoading: true,
        });
        await axios.post("https://jindoback.wonj.in/delete", { id: modalId });

        await this.getDo();
    }


    componentDidMount() {
        this.getDo();
    }


    render() {
        const { isLoading, doList, modalData: { modalId, modalName, modalMemo, modalOpened } } = this.state;

        return (
            <AppWrap className="App">
                <Title className="title">Jindo</Title>

                <DoMaker updateFormData={this.updateFormData} />

                <DoContainer>
                    {
                        doList.length > 0
                            ? (() => {
                                const children = [];
                                for (let i = doList.length - 1; i >= 0; i--) {
                                    children.push(<Do key={i} id={doList[i].id} setModalInfo={this.handleOpen} name={doList[i].name} memo={doList[i].memo} />);
                                }
                                return children;
                            })()
                            : <EmptyListNoti />
                    }
                </DoContainer>

                <DoModal modalOpened={modalOpened} handleClose={this.handleClose} deleteDo={this.deleteDo} updateFormData={this.updateFormData} id={modalId} name={modalName} memo={modalMemo} />

                <Credit>Wonjin Yi</Credit>


                {
                    isLoading
                        ? <Loading /> : ''
                }


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