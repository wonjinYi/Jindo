import React from "react";
import styled from "styled-components";
import { Button, withStyles } from "@material-ui/core";

export default class Do extends React.Component {

    state = {
        giveModalInfo : () => {
            const { id, name, memo } = this.props;
            this.props.setModalInfo(id, name, memo);
        }
    }
    

    render() {
        const { name, memo } = this.props;

        return (
            <DoWrap className="Do">
                <DoName>{ 
                    (name.length < 20)
                    ? name
                    : name.slice(0,20)+ "..."
                }</DoName>
                <DoMemo variant="outlined" onClick={this.state.giveModalInfo}>{ 
                    (memo.length < 30)
                        ? memo
                        : memo.slice(0,30)+ "..."
                }</DoMemo>
     
                
            </DoWrap>
        );
    }
}

const DoWrap = styled.div`
    display : flex;
    `;

const DoName = withStyles({
    root: {
        textTransform: 'none',
        //overflowWrap: 'break-word',
        margin: '5px',
        border: 'none',
        padding: '5px',
        fontWeight : 'bold',
        color : '#4a4a4a',
        backgroundColor: '#FFD57E',
        '&:hover': {
            backgroundColor: '#e3bc6b',
        },
        '&:active': {
            backgroundColor: '#e3bc6b',
        },
    },
})(Button);

const DoMemo = withStyles({
    root: {

        textTransform: 'none',
        margin: '5px',
        border: 'none',
        padding: '5px',
        //overflowWrap: 'break-word',
        color : '#4a4a4a',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#ededed',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#ededed',
        },
    },
})(Button);