// library, frameworks.
import { React, useEffect, useState } from "react";

import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

import mdSource from "../etc/info.md";

export default function InfoBoard() {
    const [markdown, setMarkdown] = useState('');

    useEffect( () => {
        async function init() {
            const str = await fetch(mdSource)
            .then( res => res.text() );

            setMarkdown(str);
        }
        init();
    }, [markdown]);

    return (
        <InfoBoardWrap className="InfoBoard">
            <ReactMarkdown children={markdown}>

            </ReactMarkdown>
        </InfoBoardWrap>
    );
}

const InfoBoardWrap = styled.div`

    `;

