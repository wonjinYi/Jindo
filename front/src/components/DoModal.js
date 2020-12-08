import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { makeStyles, TextField, withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
    updateFormData( modalName, modalMemo, "edit", id);
    setEditmode(false); 
}

export default function SimpleModal({modalOpened, handleClose, deleteDo, updateFormData, id, name, memo}) {
    const classes = useStyles();
    
    const [editmode, setEditmode] = useState(false);
    const [modalName, setModalName] = useState(name);
    const [modalMemo, setModalMemo] = useState(memo);

    useEffect( () => { setModalName(name) }, [name])
    useEffect( () => { setModalMemo(memo) }, [memo])

    const viewBody = (
        <ModalBody className={classes.paper}>
            <ContentWrap>
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
                <BrownBorderTextField value={modalName} onChange={ (e) => { setModalName(e.target.value) } } 
                    id="input-name" label="Who" variant="outlined" margin="dense" fullWidth
                    error={ ( name.length > 0 && name.length <= 53 ) ? false : true }
                />
                <BrownBorderTextField value={modalMemo} onChange={ (e) => { setModalMemo(e.target.value) } }
                    id="input-memo" label="What" variant="outlined" margin="dense" multiline fullWidth
                    error={ ( name.length > 0 && name.length <= 530 ) ? false : true }
                />
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