// library, frameworks.
import React from "react";
import styled from "styled-components";

import PublicBoard from "./PublicBoard";
import PrivateBoard from "./PrivateBoard";
import InfoBoard from "./InfoBoard";

//import DoContainer from "./DoContainer";

export default function Board({setModalInfo, doList, boardType, userInfo}) {

    return (
        <BoardWrap className="Board">
            {
                (() => {
                    if(boardType == "public"){
                        return ( <PublicBoard setModalInfo={setModalInfo} doList={doList} /> );
                    }  
                    else if(boardType == "private"){
                        return ( <PrivateBoard setModalInfo={setModalInfo} doList={doList} /> );
                    }
                    else if(boardType == "info"){
                        return ( <InfoBoard /> );
                    }

                })()
            }
        </BoardWrap>
        
    );
}

const BoardWrap = styled.div`
    padding : 10px;
    margin : 30px 0; 
    border-radius : 5px;

    background : #ffefa0;
    `;