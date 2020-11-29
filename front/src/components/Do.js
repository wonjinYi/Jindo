import React from "react";
import styled from "styled-components";
import { Button, withStyles } from "@material-ui/core";

export default class Do extends React.Component {

    state = {
        giveModalInfo : () => {
            const { name, content } = this.props;
            this.props.setModalInfo(name, content);
        }
    }
    

    render() {
        const { name, content } = this.props;

        return (
            <DoWrap className="Do">
                <DoName>{ name }</DoName>
                <DoContent variant="outlined" onClick={this.state.giveModalInfo}>{ 
                    (content.length < 30)
                        ? content
                        : content.slice(0,30)+ "..."
                }</DoContent>
     
                
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

const DoContent = withStyles({
    root: {

        textTransform: 'none',
        margin: '5px',
        border: 'none',
        padding: '5px',

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