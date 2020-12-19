import React from 'react';
import styled from "styled-components";

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PublicIcon from '@material-ui/icons/Public';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';




export default function IconLabelTabs({updateBoardType}) {
  const [value, setValue] = React.useState(0);
  const boardTypeDefine = ['public', 'private', 'info'];

  const handleChange = (event, newValue) => {
    setValue(newValue);

    updateBoardType(boardTypeDefine[newValue]);
  };

  return (
    <BoardSelectorWrap>
        <SelectTabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"

          aria-label="icon label tabs example"
        >
          <SelectTab icon={<PublicIcon />} label="Public" />
          <SelectTab icon={<AccountCircleIcon />} label="Private" />
          <SelectTab icon={<InfoIcon />} label="Info" />
        </SelectTabs>
    </BoardSelectorWrap>
  );
}

const BoardSelectorWrap = styled.div`
  margin-bottom : 30px;
  
  `;

const SelectTabs = withStyles({
  root: {
    flexGrow : 1,
    maxWidth : 500,
    backgroundColor : '#FFEFA0',
    borderRadius : '10px',
    // '& > span': {
    //   backgroundColor : '#FCA652',
    // }
  },
  indicator : {
    backgroundColor : '#FCA652',
  }
})(Tabs);

const SelectTab = withStyles({
  root: {
    color : '#4A4A4A',
    backgroundColor : '#FFEFA0',
    transition : 'background-color 1s',
    // '&:hover' : {
    //   backgroundColor : '#fca958',
    //   color : '#ffffff',
    //   transition : 'all 0.5s',
    // },

  },
  disabled : {
 
  },
  selected : {
    //color : '#ffffff',
    backgroundColor: '#FCA652',
  },
})(Tab);

//https://material-ui.com/components/tabs/