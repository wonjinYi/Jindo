import React from "react";
import styled from "styled-components";
import { TextField, Button, withStyles } from "@material-ui/core";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default class DoMaker extends React.Component {
  state = {
    name : "",
    content : "",
  }

  giveUpdatedFormData = () => {
    const { name, content } = this.state;
    this.props.updateFormData( name, content );
    // const inputName = document.getElementById('input-name').value;
    // const inputContent = document.getElementById('input-content').value;
    // this.props.updateFormData( inputName, inputContent );
  }

  render() {
      const { name, content } = this.state;

      return (
          <DoMakerWrap className="DoMaker">
              <BrownBorderTextField value={name} onChange={ (e) => {this.setState( {name:e.target.value} );} } 
                id="input-name" label="What" variant="outlined" margin="dense" 
              />
              <BrownBorderTextField value={content} onChange={ (e) => {this.setState( {content:e.target.value} );} }
                id="input-content" label="Who" variant="outlined" margin="dense" 
              />
              <DooButton onClick={this.giveUpdatedFormData} variant="contained" disableElevation><AddCircleOutlineIcon /></DooButton>
          </DoMakerWrap>
          
      );
  }
}

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