import React from 'react'
import styled from 'styled-components'
import { Breadcrumb } from 'semantic-ui-react'

const StyledBreadcrumb = styled.div`
  @media only screen and (min-width: 768px){
    display: none;
  }
  margin: 0.5em 0 3em 1em;
`
const RPBreadcrumb = ({ sections }) => {
  return (
    <StyledBreadcrumb>
      <Breadcrumb divider='/' sections={sections} />
    </StyledBreadcrumb>
  )
}

export default RPBreadcrumb


