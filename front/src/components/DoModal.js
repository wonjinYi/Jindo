import React from 'react';
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: '90%',
    backgroundColor : 'rgba(255,255,255,0.8)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({modalOpened, handleClose, deleteDo, name, content}) {
    const classes = useStyles();
    
    const body = (
        
        <ModalBody className={classes.paper}>
            <div>
                <Name>{ name }</Name>
                <Content>{ content }</Content>
            </div>
            <Menu>
                <IconButton><EditIcon /></IconButton>
                <IconButton onClick={deleteDo}><DeleteForeverIcon /></IconButton>
            </Menu>
        </ModalBody>
    );

    return (
        <div className="SimpleModal">
            <Modal open={modalOpened} onClose={handleClose}>
                {body}
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
    `;

const Name = styled.p`
    padding : 10px;

    text-align : center;

    background : #FFD57E;
    border-radius : 5px;
    color : #4a4a4a;
    font-weight : bold
    `;

const Content = styled.p`
    background : #FFFFFF;
    color : #4a4a4a;
    padding : 10px;
    border-radius : 5px;
    `;

const Menu = styled.div`
    display : flex;
    `;