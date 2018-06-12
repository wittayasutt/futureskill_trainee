import React, { Component } from 'react'
import styled from 'styled-components'

import Nav from '../components/nav'
import Footer from '../components/footer'

const Wrapper = styled.div``

class Course extends Component {
	static getInitialProps({ store, isServer, pathname, query }) {
		return { custom: 'custom' }
	}

	render() {
		return (
			<Wrapper>
				<Nav />
				<Footer />
			</Wrapper>
		)
	}
}

export default Course
