// library, frameworks.
import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function DoContainer({setModalInfo, doList}) {


    return (
        doList.length > 0
            ?   (() => {
                    const children = [];
                    for (let i = doList.length - 1; i >= 0; i--) {
                        children.push(<Do key={i} id={doList[i].id} setModalInfo={this.openModal} name={doList[i].name} memo={doList[i].memo} />);
                    }
                    return children;
                })()
            :   <EmptyListNoti />

    );
}

