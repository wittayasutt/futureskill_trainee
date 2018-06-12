import React, { Component } from 'react'
import styled from 'styled-components'

import Nav from '../components/nav'
import Home from '../components/home'
import Footer from '../components/footer'

const Wrapper = styled.div``

class Index extends Component {
	static getInitialProps({ store, isServer, pathname, query }) {
		return { custom: 'custom' }
	}

	constructor(props, context) {
		super(props, context)

		this.state = {
			top: true
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = event => {
		let top = window.scrollY > 0 ? false : true
		this.setState({ top })
	}

	render() {
		const { top } = this.state

		return (
			<Wrapper>
				<Nav home={top} />
				<Home />
				<Footer />
			</Wrapper>
		)
	}
}

export default Index
