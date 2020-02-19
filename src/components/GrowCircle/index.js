import styled from "styled-components"

export const PageLoader = styled.div`
  height: 100vh;
  overflow: hidden;
  display: ${props => (props.finished ? "none" : "inherit")};
`
export const PageLoaderWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  display: block;
  background: ${props => props.bg || "#fff"};
  opacity: ${props => (props.finished ? 0 : 1)};
`
export const PageLoaderRipple = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => (props.grow ? "250vw" : 0)};
  height: ${props => (props.grow ? "250vw" : 0)};
  background: #ffdb01;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 1.6s 0.1s cubic-bezier(0.6, 0.2, 0.1, 1);
  overflow: hidden;
`
