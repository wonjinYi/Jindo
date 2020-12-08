import React from "react";
import styled from "styled-components";
import { TextField, Button, withStyles } from "@material-ui/core";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default class DoMaker extends React.Component {
  state = {
    name : "",
    memo : "",
  };



  giveUpdatedFormData = () => {
    const { name, memo } = this.state;
    this.props.updateFormData( name, memo, "create" );
  };


  render() {
      
      const { name, memo } = this.state;
      console.log(name.length, memo.length);
      return (
          <DoMakerWrap className="DoMaker">
              <BrownBorderTextField value={name} onChange={ (e) => {this.setState( {name:e.target.value} );} } 
                id="input-name" label="Who" variant="outlined" margin="dense" defaultValue="WHO"
              />
              <TextValidator>{ ( name.length>53 ) ? "↑ In 1~53 character" : "" }</TextValidator>
              <BrownBorderTextField value={memo} onChange={ (e) => {this.setState( {memo:e.target.value} );} }
                id="input-memo" label="What" variant="outlined" margin="dense" defaultValue="WHAT"
              />
              <TextValidator>{ ( memo.length>530 ) ? "↑ In 1~530 character" : "" }</TextValidator>
              <DooButton onClick={this.giveUpdatedFormData} variant="contained" disableElevation><AddCircleOutlineIcon /></DooButton>
          </DoMakerWrap>
          
      );
  }
}

const BrownBorderTextField  = withStyles({
  root: {
      margin : '10px 0 0 0',
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
  margin : '10px 0 0 0',
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

const TextValidator = styled.p`
  color : red;
  margin : 0;
  padding : 0;
  `;