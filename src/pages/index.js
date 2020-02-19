import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { TransitionState } from "gatsby-plugin-transition-link"
import CatchPhrase from "../components/CatchPhrase"
import {
  PageLoader,
  PageLoaderWrapper,
  PageLoaderRipple,
} from "../components/GrowCircle"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.location = this.props.location
    this.state = { grow: false, finished: false }
  }
  componentDidMount() {
    this.setState({ grow: true })
    // setTimeout(() => {
    //   this.setState({ wrapperBg: "#ffdb01" })
    // }, 100)
    setTimeout(() => {
      this.setState({ wrapperBg: "transparent" })
    }, 400)
    setTimeout(() => {
      this.setState({ finished: true })
    }, 1700)
  }
  render() {
    return (
      <TransitionState>
        {({ entry }) => (
          <>
            <PageLoader finished={this.state.finished}>
              <PageLoaderWrapper
                bg={this.state.wrapperBg}
                finished={this.state.finished}
              >
                <PageLoaderRipple grow={this.state.grow} />
              </PageLoaderWrapper>
            </PageLoader>
            <Layout location={this.location}>
              <SEO title="#ReflejaTuAlegría" />
              <CatchPhrase
                disableFirstAnimation={entry.state.disableFirstAnimation}
              />
            </Layout>
          </>
        )}
      </TransitionState>
    )
  }
}
export default IndexPage
