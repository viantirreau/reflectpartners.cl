import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"


const StyledGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    justify-content:center;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 60%;
    
    @media (max-width: 767px){
        width: 90%;
    }
`



const StyledSVG = styled.img`
    filter: saturate(0);
    transition: 0.2s;
    display:flex;
    max-height: 160px;
    max-width: 160px;
    margin: 0.8em;
    width: auto;
    height: auto;

    &:hover {
        filter: none;
    }

    @media (max-width: 767px){
        max-height: 120px;
        max-width: 120px;
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
        </div>
    )
}

export default CompanyLogos
