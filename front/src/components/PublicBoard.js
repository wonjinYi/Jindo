// library, frameworks.
import React from "react";
import styled from "styled-components";

import DoContainer from "./DoContainer";

export default function Board({setModalInfo, doList}) {

    return (
        <div className="Board">
            
            
            <DoContainer setModalInfo={setModalInfo} doList={doList} />
        </div>
        
    );
}
