import React from "react"
import { Header } from "semantic-ui-react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Cover from "../Transition"

const YellowHeader = styled(Header)`
  color: #ffdb01 !important;
  font-weight: 200 !important;
  text-transform: uppercase !important;
  white-space: nowrap;
`

const List = styled.li`
  list-style: none;
  white-space: nowrap;
`
const StyledLink = styled(Cover)`
  color: #ddd;
  &:hover {
    color: #ffec79;
  }
`

export const WhiteTitle = styled(Header)`
  white-space: nowrap;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  letter-spacing: 0.1em;
  font-size: 0.9em;
`

export const Title = ({ title, children }) => (
  <>
    <ul style={{ marginLeft: 0, marginBottom: "2em" }}>
      <List>
        <YellowHeader>{title}</YellowHeader>
      </List>
      {children.map((child, index) => (
        <List key={index}>{child}</List>
      ))}
    </ul>
  </>
)

export const Item = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
}
