import React from 'react';
import styled from "styled-components";

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
          aria-label="board selector"
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
  },
  disabled : {
  },
  selected : {
    backgroundColor: '#FCA652',
  },
})(Tab);