import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Loading() {
    const classes = useStyles();

    return (
        <div className="Loading">
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit" />  
            </Backdrop>
        </div>
    );
}