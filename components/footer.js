import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Wrapper = styled.div`
	background: ${props => props.primary};
`

const Container = styled.div`
	height: 200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	font-size: 32px;
	font-weight: 500;
	color: #ffffff;
`

class Footer extends Component {
	render() {
		const { theme } = this.props

		return (
			<Wrapper primary={theme.primary}>
				<Container className="container">Footer</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Footer)
