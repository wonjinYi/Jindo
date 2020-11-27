import React from "react";
import styled from "styled-components";
import { TextField, Button, withStyles } from "@material-ui/core";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const BrownBorderTextField  = withStyles({
    root: {
        margin : '0 0 0.5em 0',
        '& label' : {
            color : '#fca652',
        },
        '& label.Mui-focused': {
            color: '#fca652',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: '#fca652',
            },
            '&:hover fieldset': {
            borderColor: '#fca652',
            },
            '&.Mui-focused fieldset': {
            borderColor: '#fca652',
            },
        },
    },
  })(TextField);

  const DooButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: '1.5em',
      padding: '6px 0',
      border: 'none',
      lineHeight: 1.5,
      color : 'white',
      backgroundColor: '#fca652',
      '&:hover': {
        backgroundColor: '#e0944a',
        //borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#e0944a',
        //borderColor: '#005cbf',
      },
    },
  })(Button);

//styled-component.
const DoMakerWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-contents : center;
    
    padding : 10px;
    border-radius : 5px;

    background : #ffefa0;
    `;

class DoMaker extends React.Component {


    render() {
        return (
            <DoMakerWrap className="DoMaker">
                <BrownBorderTextField id="outlined-basic" label="What" variant="outlined" margin="dense" />
                <BrownBorderTextField id="outlined-basic" label="Who" variant="outlined" margin="dense" />
                <DooButton variant="contained" disableElevation><AddCircleOutlineIcon /></DooButton>
            </DoMakerWrap>
            
        );
    }
}

export default DoMaker;