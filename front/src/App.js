// library, frameworks.
import React from "react";
import styled from "styled-components";
import axios from "axios";


// components

import DoMaker from "./components/DoMaker";
import Board from "./components/Board";
import DoModal from "./components/DoModal";
import BoardSelector from "./components/BoardSelector";


import Loading from "./components/Loading";


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
            modalOpened: false,
        },

        boardType : 'public', // public, private, info
        doList : [],

        userInfo : null,
        //userAuthenticated : (userInfo != null),
    };

    openModal = (id) => {
        this.setState({
            modalData: {
                modalId: id,
                modalOpened: true,
            }
        });
    };

    closeModal = () => {
        this.setState({
            modalData: {
                modalId: 0,
                modalOpened: false,
            }
        });
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
                    modalOpened: true,
                },
            }, () => this.editDo(id, formName, formMemo ) );
        }
    }

    updateBoardType = (type) => {
        this.setState({ boardType : type });
        console.log("boardtype : ",type);

        this.setState({ isLoading: true });
        this.getDo();
    }
    
    findDoById = (modalId) => {
        const { doList } = this.state;

        const isTarget = (el) => el.id == modalId;
        const targetIndex = doList.findIndex(isTarget);

        if ( targetIndex != -1 ){
            const targetDo = doList[targetIndex]
            return targetDo;
        } else {
            const targetDo = {
                id : 'error',
                name : 'error',
                memo : 'error',
                updatedAt : 'error',
            };
            return targetDo;
        }
    }

    // API request
    getDo = async () => {
        const { boardType } = this.state;

        const { data } = await axios.get("https://jindoback.wonj.in/public_data")
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

    editDo = async (id, name, memo) => {
        const modalData = {
            id,
            name,
            memo,
        };
        
        await axios.post("https://jindoback.wonj.in/edit", modalData);

        await this.getDo();
    }

    deleteDo = async () => {
        const { modalData: {
            modalId
        } } = this.state;

        this.closeModal();
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
        const { isLoading, doList, boardType, userInfo, modalData: { modalId, modalOpened } } = this.state;

        const targetDo = this.findDoById(modalId);
        //console.log('targetDO ',targetDo)
        
        return (
            <AppWrap className="App">
                <Title className="title">Jindo</Title>

                <BoardSelector updateBoardType={this.updateBoardType} />

                <DoMaker updateFormData={this.updateFormData} />

                <Board setModalInfo={this.openModal} doList={doList} boardType={boardType} userInfo={userInfo} />

                <DoModal    modalOpened={modalOpened} handleClose={this.closeModal} deleteDo={this.deleteDo} updateFormData={this.updateFormData}
                            id={targetDo.id} name={targetDo.name} memo={targetDo.memo} updatedAt={targetDo.updatedAt}
                />

                <Credit>Wonjin Yi</Credit>


                { isLoading
                    ? <Loading /> 
                    : ''
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



const Credit = styled.p`
    font-size : 1em;
    color : #fca652;
    `;