// library, frameworks.
import React from "react";
//import styled from "styled-components";

import DoContainer from "./DoContainer";

export default function PublicBoard({setModalInfo, doList, userInfo}) {

    return (
        <div className="PublicBoard">
            {
                (() => {
                    if(userInfo != null){
                        return ( <DoContainer setModalInfo={setModalInfo} doList={doList} /> );
                    }
                    else {
                        return ( 
                            <a href="https://wonj.in" target="_blank">
                                <img src="https://daldal.so/media/images/oauth-button.png" />
                            </a>
                        );
                    }
                })()
            }
            
        </div>
        
    );
}
