import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Wrapper = styled.div`
	height: 264px;
	width: 220px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	border-radius: 4px;
	box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
	margin: 0 16px;
`

const Image = styled.img`
	max-height: 60px;
	max-width: 60px;
	margin-bottom: 50px;
`

const Title = styled.div`
	font-size: 18px;
	font-weight: 500;
`

const Subtitle = styled.div`
	font-size: 14px;
	color: ${props => props.neutral};
	margin-top: 8px;
`

class Card extends Component {
	render() {
		let { theme, data } = this.props

		return (
			<Wrapper>
				<Image src={data.image} alt="icon" />
				<Title>{data.title}</Title>
				<Subtitle neutral={theme.neutral}>{data.subtitle}</Subtitle>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Card)
