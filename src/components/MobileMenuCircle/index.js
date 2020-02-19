import React from "react"
import styled from "styled-components"

const MenuToggle = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto;
  position: relative;
  cursor: pointer;
  z-index: 10000;
  background: rgba(255, 219, 1, 0.8);
  border-radius: 50px;
  &:hover {
    background: rgb(255, 219, 1);
  }
`

const Span = styled.span`
  display: block;
  background: #333;
  border-radius: 2px;
  transition: 0.25s ease-in-out;
  box-sizing: border-box;
  z-index: 10000;
`
const Hamburger = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  &.open span {
    width: 0%;
    &:nth-child(1) {
      transition-delay: 0s;
    }
    &:nth-child(2) {
      transition-delay: 0.125s;
    }
    &:nth-child(3) {
      transition-delay: 0.25s;
    }
  }
`
const HamburgerSpan = styled(Span)`
  width: 50px;
  height: 4px;
  position: relative;
  top: 24px;
  left: 25px;
  margin: 10px 0;
  &:nth-child(1) {
    transition-delay: 0.5s;
  }
  &:nth-child(2) {
    transition-delay: 0.625s;
  }
  &:nth-child(3) {
    transition-delay: 0.75s;
  }
`
const Cross = styled.div`
  position: absolute;
  height: 85%;
  width: 85%;
  transform-origin: center center;
  transform: rotate(45deg);
  &.open span {
    &:nth-child(1) {
      height: 80%;
      transition-delay: 0.625s;
    }
    &:nth-child(2) {
      width: 80%;
      transition-delay: 0.375s;
    }
  }
`
const CrossSpan = styled(Span)`
  &:nth-child(1) {
    height: 0%;
    width: 4px;
    position: absolute;
    top: 10%;
    left: 51px;
    transition-delay: 0s;
  }
  &:nth-child(2) {
    width: 0%;
    height: 4px;
    position: absolute;
    left: 23%;
    top: 40px;
    transition-delay: 0.25s;
  }
`

const Circle = ({ open, handler }) => {
  return (
    <MenuToggle onClick={handler}>
      <Hamburger className={`${open ? "open" : ""}`}>
        <HamburgerSpan />
        <HamburgerSpan />
        <HamburgerSpan />
      </Hamburger>
      <Cross className={`${open ? "open" : ""}`}>
        <CrossSpan />
        <CrossSpan />
      </Cross>
    </MenuToggle>
  )
}

export default Circle
