// library, frameworks.
import Axios from "axios";
import { React, useState } from "react";
//import styled from "styled-components";

import DoContainer from "./DoContainer";

export default function PrivateBoard({ setModalInfo, doList }) {

    const [islogin, setIsLogin] = useState(false);
    updateIsLogin(setIsLogin);
    console.log(islogin);

    return (
        <div className="PrivateBoard">
            {
                islogin
                ?   (<div className="Private-innerwrap">
                        <a onClick={ () => { handleLogout(setIsLogin) } }> LOGOUT </a>
                        <DoContainer setModalInfo={setModalInfo} doList={doList} />
                    </div>)
                    
                :   (<a href="https://jindoback.wonj.in/login/daldalso">
                        <img src="https://daldal.so/media/images/oauth-button.png" />
                    </a>)
            }

        </div>

    );
}

async function updateIsLogin(setIsLogin) {
    const { data } = await Axios.get('https://jindoback.wonj.in/islogin', {withCredentials : true});
    setIsLogin(data);

    console.log('updateIsLogin : ', data);
}

function handleLogout(setIsLogin) {
    const { data } = Axios.get('https://jindoback.wonj.in/logout', {withCredentials : true});
    updateIsLogin(setIsLogin);
    console.log('handleLogout : ', data);
}