// library, frameworks.
import React from "react";
import styled from "styled-components";
//components
import EmptyListNoti from "./components/EmptyListNoti";

export default function DoContainer({setModalInfo, doList}) {


    return (
        <DoContainer>
        {
            doList.length > 0
                ?   (() => {
                        const children = [];
                        for (let i = doList.length - 1; i >= 0; i--) {
                            children.push(<Do key={i} id={doList[i].id} setModalInfo={this.openModal} name={doList[i].name} memo={doList[i].memo} />);
                        }
                        return children;
                    })()
                :   <EmptyListNoti />
        }
        </DoContainer>
    );
}

const DoContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-contents : center;
    max-width : 50%;

    padding : 10px;
    margin : 30px 0; 
    border-radius : 5px;

    background : #ffefa0;
    `;