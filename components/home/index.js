import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Welcome from './welcome'
import Recommend from './recommend'
import Carousel from './carousel'
import Pros from './pros'
import Register from './register'

const Wrapper = styled.div``

class Home extends Component {
	render() {
		return (
			<Wrapper>
				<Welcome />
				<Recommend />
				<Carousel />
				<Pros />
				<Register />
			</Wrapper>
		)
	}
}

export default Home
