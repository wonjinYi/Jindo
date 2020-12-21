// library, frameworks.
import React from "react";
import styled from "styled-components";
//components
import Do from "./Do";
import EmptyListNoti from "./EmptyListNoti";

export default function DoContainer({setModalInfo, doList}) {


    return (
        <DoContainerWrap>
        {
            doList.length > 0
                ?   (() => {
                        const children = [];
                        for (let i = doList.length - 1; i >= 0; i--) {
                            children.push(<Do key={i} id={doList[i].id} setModalInfo={setModalInfo} name={doList[i].name} memo={doList[i].memo} />);
                        }
                        return children;
                    })()
                :   <EmptyListNoti />
        }
        </DoContainerWrap>
    );
}

const DoContainerWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-contents : center;
    max-width : 50%;

    padding : 10px;
    margin : 30px 0; 
    border-radius : 5px;

    background : #ffefa0;
    `;