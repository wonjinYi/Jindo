// library, frameworks.
import React from "react";
import styled from "styled-components";

import PublicBoard from "./PublicBoard";
import PrivateBoard from "./PrivateBoard";
import InfoBoard from "./InfoBoard";

import DoContainer from "./DoContainer";

export default function Board({setModalInfo, doList}) {

    return (
        <div className="Board">
            <DoContainer setModalInfo={setModalInfo} doList={doList} />
        </div>
        
    );
}