import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

const StyledVideoResponsive = styled.div`
    
    overflow: hidden;
    padding-bottom: 62%;
    position: relative;
    height: 0;
    margin: 2% auto -20% auto;

    & > iframe {
        height: 60%;
        width: 60%;
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    @media(max-width: 767px){
        padding-top: 10%;
        margin-bottom: 0;
        & > iframe {
            width: 100%;
            height: 100%;
        }
    }

`

const YoutubeEmbed = ({ embedId }) => (
    <StyledVideoResponsive>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="#ReflejaTuAlegría"
        />
    </StyledVideoResponsive>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
