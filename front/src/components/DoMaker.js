import React from "react";
import styled from "styled-components";
import { TextField, Button, withStyles } from "@material-ui/core";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const raro = require("raro-number"); // 53


export default class DoMaker extends React.Component { // updateFormData, boardType
	state = {
		name: "",
		memo: "",
	};

	giveUpdatedFormData = () => {

		const { name, memo } = this.state;

		const nameValidation = (name.length > 0 && name.length <= raro) ? true : false;
		const memoValidation = (memo.length > 0 && memo.length <= raro * 10) ? true : false;

		if ((nameValidation || this.props.boardType === "private") && memoValidation) {
			this.props.updateFormData(name, memo, "create");
		}
	};

	render() {

		const { name, memo } = this.state;
		const isDisabled = ((this.props.boardType === "private") ? true : false);

		return (
			<DoMakerWrap className="DoMaker">
				<BrownBorderTextField
					disabled={isDisabled}
					value={name} onChange={(e) => { this.setState({ name: e.target.value }); }}
					id="input-name" label="Who" variant="outlined" margin="dense"
				/>
				<TextValidator>{(name.length > (raro)) ? "↑ 53 Characters or less" : ""}</TextValidator>
				<BrownBorderTextField value={memo} onChange={(e) => { this.setState({ memo: e.target.value }); }}
					id="input-memo" label="What" variant="outlined" margin="dense"
				/>
				<TextValidator>{(memo.length > (raro * 10)) ? "↑ 530 Characters or less" : ""}</TextValidator>
				<DooButton onClick={this.giveUpdatedFormData} variant="contained" disableElevation><AddCircleOutlineIcon /></DooButton>
			</DoMakerWrap>

		);
	}
}

const BrownBorderTextField = withStyles({
	root: {
		margin: '10px 0 0 0',
		'& label': {
			color: '#fca652',
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
		margin: '10px 0 0 0',
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: '1.5em',
		padding: '6px 0',
		border: 'none',
		lineHeight: 1.5,
		color: 'white',
		backgroundColor: '#fca652',
		'&:hover': {
			backgroundColor: '#e0944a',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#e0944a',
		},
	},
})(Button);

//styled-component.
const DoMakerWrap = styled.div`
  display : flex;
  flex-direction : column;
  justify-contents : center;
  
  padding : 0 10px 10px 10px;
  border-radius : 5px;

  background : #ffefa0;

  @media(max-width : 768px){
    width : 90%;
  }
  `;

const TextValidator = styled.p`
  color : red;
  margin : 0;
  padding : 0;
  `;