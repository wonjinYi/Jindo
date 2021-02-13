// library, frameworks.
import Axios from "axios";
import { React, useState } from "react";

// components.
import DoContainer from "./DoContainer";

export default function PrivateBoard({ setModalInfo, doList }) {

    const [islogin, setIslogin] = useState( updateIslogin() );

    return (
        <div className="PrivateBoard">
            {
                islogin
                ?   (<div className="Private-innerwrap">
                        <span onClick={ () => { handleLogout(setIslogin) } }> LOGOUT </span>
                        <DoContainer setModalInfo={setModalInfo} doList={doList} />
                    </div>)
                    
                :   (<a href="https://jindoback.wonj.in/login/daldalso">
                        <img src="https://daldal.so/media/images/oauth-button.png" alt="daldalso-Login" />
                    </a>)
            }

        </div>

    );
}

async function updateIslogin() {
    const { data } = await Axios.get('https://jindoback.wonj.in/islogin', {withCredentials : true});
    console.log('updateIsLogin : ', data);

    return data;
}

function handleLogout(setIslogin) {
    const { data } = Axios.get('https://jindoback.wonj.in/logout', {withCredentials : true});
    updateIslogin(setIslogin);
    console.log('handleLogout : ', data);
}