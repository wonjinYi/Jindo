// library, frameworks.
import React from "react";
//import styled from "styled-components";

import DoContainer from "./DoContainer";

export default function PublicBoard({setModalInfo, doList}) {

    return (
        <div className="PublicBoard">
            <DoContainer setModalInfo={setModalInfo} doList={doList} />
        </div>
        
    );
}
