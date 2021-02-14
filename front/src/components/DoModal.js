import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { makeStyles, TextField, withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const raro = require("raro-number"); // 53

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: '80%',
    backgroundColor : 'rgba(255,255,255,0.8)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const giveUpdatedFormData = (setEditmode, updateFormData, id, modalName, modalMemo) => {
    const nameValidation = ( modalName.length > 0 && modalName.length <= raro ) ? true : false ;
    const memoVliadation = ( modalMemo.length > 0 && modalMemo.length <= raro*10 ) ? true : false ;

    if(nameValidation && memoVliadation) {
        updateFormData( modalName, modalMemo, "edit", id);
        setEditmode(false);
    } 
}

export default function SimpleModal({modalOpened, handleClose, deleteDo, updateFormData, boardType, id, name, memo, updatedAt}) {
    const classes = useStyles();
    
    const [editmode, setEditmode] = useState(false);
    const [modalName, setModalName] = useState(name);
    const [modalMemo, setModalMemo] = useState(memo);

    useEffect( () => { setModalName(name) }, [name])
    useEffect( () => { setModalMemo(memo) }, [memo])

    const parsedUpdatedAt = updatedAt.substring(0,10) + ' ' + updatedAt.substring(11,16);
    const isDisabled = ((boardType === "private") ? true : false);

    const viewBody = (
        <ModalBody className={classes.paper}>
            <ContentWrap>
                <p>{ parsedUpdatedAt }</p>
                <Name>{ modalName }</Name>
                <Memo>{ modalMemo }</Memo>
            </ContentWrap>  
             
            <Menu>
                <IconButton onClick={ () => setEditmode(true) }><EditIcon /></IconButton>
                <IconButton onClick={deleteDo}><DeleteForeverIcon /></IconButton>
            </Menu>
        </ModalBody>
    );

    const editBody = (
        <ModalBody className={classes.paper}>
            <ContentWrap>
                <BrownBorderTextField 
                    disabled={isDisabled}
                    value={modalName} onChange={ (e) => { setModalName(e.target.value) } } 
                    id="input-name" label="Who" variant="outlined" margin="dense" fullWidth
                />
                <TextValidator>{ ( modalName.length>(raro) ) ? "↑ 53 Characters or less" : "" }</TextValidator>
                <BrownBorderTextField value={modalMemo} onChange={ (e) => { setModalMemo(e.target.value) } }
                    id="input-memo" label="What" variant="outlined" margin="dense" multiline fullWidth
                />
                <TextValidator>{ ( modalMemo.length>(raro*10) ) ? "↑ 530 Characters or less" : "" }</TextValidator>
            </ContentWrap>  
            
            <Menu>
                <IconButton onClick={ () => { giveUpdatedFormData(setEditmode, updateFormData, id, modalName, modalMemo) } }><CheckCircleOutlineIcon /></IconButton>
                <IconButton onClick={ () => { setEditmode(false); } }><HighlightOffIcon /></IconButton>
                <IconButton onClick={ () => { setEditmode(false); deleteDo(); } }>
                    <DeleteForeverIcon />
                </IconButton>
            </Menu>
        </ModalBody>
    )

    return (
        <div className="SimpleModal">
            <Modal open={modalOpened} onClose={ () => { setEditmode(false); handleClose(); } }>
            {
                editmode
                ? editBody
                : viewBody
            }
            </Modal>
        </div>
    );
}



const ModalBody = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-end;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);

    min-width : 70%;

    `;

const ContentWrap = styled.div`
    width : 100%;
    max-width : 100%;
    
    display : flex;
    flex-direction : column;
    justify-contents : center;
    align-items : center;
    `;
const Name = styled.p`
    padding : 10px;
    
    text-align : center;

    background : #FFD57E;
    border-radius : 5px;
    color : #4a4a4a;
    font-weight : bold
    `;

const Memo = styled.p`
    background : #FFFFFF;
    color : #4a4a4a;
    padding : 10px;
    border-radius : 5px;
    word-break: break-all;
    overflow-wrap: break-word; 
    `;

const Menu = styled.div`
    display : flex;
    `;


const BrownBorderTextField  = withStyles({
    root: {
        
        margin : '16px 0',
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

const TextValidator = styled.p`
  color : red;
  margin : 0;
  padding : 0;
  `;