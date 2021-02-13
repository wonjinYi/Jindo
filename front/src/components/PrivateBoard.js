// library, frameworks.
import Axios from "axios";
import { React, useEffect, useState } from "react";

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
                            <div className="Private-innerwrap">
                                <span onClick={ () => { handleLogout(setIslogin) } }> LOGOUT </span>
                                <DoContainer setModalInfo={setModalInfo} doList={doList} />
                            </div>
                        );
                    } else if ( islogin === false ) {
                        return (
                            <div className="Private-innerwrap">
                                <a href="https://jindoback.wonj.in/login/daldalso">
                                    <img src="https://daldal.so/media/images/oauth-button.png" alt="daldalso-Login" />
                                </a>
                            </div>
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

    console.log('updateIsLogin : ', data, typeof data, '    ', data===true, data===false);
    
    return data;
}

function handleLogout(setIslogin) {
    const { data } = Axios.get('https://jindoback.wonj.in/logout', {withCredentials : true});
    setIslogin(false);
    console.log('handleLogout : ', data);
}