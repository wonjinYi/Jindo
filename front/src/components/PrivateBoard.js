// library, frameworks.
import Axios from "axios";
import { React, useEffect, useState } from "react";

import styled from "styled-components";

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// components.
import DoContainer from "./DoContainer";
import EmptyListNoti from "./EmptyListNoti";

export default function PrivateBoard({ setModalInfo, doList }) {

    const [islogin, setIslogin] = useState(0);
    useEffect( async () => {
        console.log('useffect');
        const res = await updateIslogin();
        setIslogin(res);
    }, [islogin])
    //setIslogin( updateIslogin );

    return (
        <div className="PrivateBoard">
            {
                (() => {
                    if ( islogin === true ){
                        return (
                            <PrivateBoardWrap>
                                <Tooltip title="Logout" placement="left">
                                    <IconButton onClick={ () => { handleLogout(setIslogin) }}><ExitToAppIcon /></IconButton>
                                </Tooltip>
                                <DoContainer setModalInfo={setModalInfo} doList={doList} />
                            </PrivateBoardWrap>
                        );
                    } else if ( islogin === false ) {
                        return (
                            <PrivateBoardWrap>
                                <a href="https://jindoback.wonj.in/login/daldalso">
                                    <img src="https://daldal.so/media/images/oauth-button.png" alt="daldalso-Login" />
                                </a>
                            </PrivateBoardWrap>
                        );
                    } else {
                        return (<EmptyListNoti />);
                    }
                })()
            }

        </div>

    );
}

async function updateIslogin() {
    const { data } = await Axios.get('https://jindoback.wonj.in/islogin', {withCredentials : true})
    return data;
}

function handleLogout(setIslogin) {
    const { data } = Axios.get('https://jindoback.wonj.in/logout', {withCredentials : true});
    setIslogin(false);
}

const PrivateBoardWrap = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-end;
    `;