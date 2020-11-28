import React from "react";
import styled from "styled-components";
import { Button, IconButton, withStyles } from "@material-ui/core";

export default class Do extends React.Component {
    
    render() {
        const { name, content } = this.props;

        return (
            <DoWrap className="Do">
                <DoName>{ name }</DoName>
                <DoContent variant="outlined">{ 
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