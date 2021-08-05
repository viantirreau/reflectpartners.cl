import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"


const StyledGridContainer = styled.div`
    display:table;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 80%;
`



const StyledSVG = styled.img`
    filter: saturate(0);
    transition: 0.2s;
    max-height: 100px;
    max-width: 100px;
    width: auto;
    height: auto;

    &:hover {
        filter: none;
    }
`

const CompanyLogos = () => {
    const data = useStaticQuery(graphql`
        query CompanyLogosQuery {
            allFile(filter: { relativePath: { regex: "/logo_.*svg/i" } }) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
        }
    `)
    return (
        <div>
            <StyledGridContainer>
                {data.allFile.edges.map(e => {
                    return <StyledSVG src={e.node.publicURL} key={e.node.publicURL}></StyledSVG>
                })}
            </StyledGridContainer>
            Logo {JSON.stringify()}
        </div>
    )
}

export default CompanyLogos
