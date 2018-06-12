import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from '../molecules/card/pros'

const Wrapper = styled.div`
	background: #f8f9ff;
`

const Curve = styled.img`
	width: 100vw;
	user-select: none;
`

const Container = styled.div`
	height: 60vh;
	max-height: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const BoxWrapper = styled.div`
	position: absolute;
	background: linear-gradient(
		${props => props.primary}\,
		${props => props.secondary}
	);
	border-radius: 20px;
	padding: 1px;
`

const Box = styled.div`
	height: 466px;
	width: 940px;
	display: flex;
	justify-content: center;
	background: #f8f9ff;
	border-radius: 20px;
}
`

const BoxTitle = styled.span`
	font-size: 32px;
	font-weight: 500;
	position: absolute;
	top: -23px;
	background: #f8f9ff;
	padding: 0 20px;
`

const BoxSubtitle = styled.div`
	font-weight: 500;
	color: ${props => props.neutral};
	margin-top: 40px;
`

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 1;
`

const cards = [
	{
		title: 'คอร์สกว่า 10,000',
		subtitle: 'ตัวอย่างพารากราฟ',
		image: 'static/images/icon.png'
	},
	{
		title: 'คอร์สใหม่ทุกอาทิตย์',
		subtitle: 'ตัวอย่างพารากราฟ',
		image: 'static/images/icon.png'
	},
	{
		title: 'บุฟเฟ่',
		subtitle: 'ตัวอย่างพารากราฟ',
		image: 'static/images/icon.png'
	},
	{
		title: 'xxx',
		subtitle: 'ตัวอย่างพารากราฟ',
		image: 'static/images/icon.png'
	}
]

class Pros extends Component {
	render() {
		const { theme } = this.props

		return (
			<Wrapper>
				<Curve src="static/images/home_bg5.png" alt="curve" />
				<Container className="container">
					<BoxWrapper primary={theme.primary} secondary={theme.secondary}>
						<Box>
							<BoxTitle>Up My Skill ให้อะไร</BoxTitle>
							<BoxSubtitle neutral={theme.neutral}>
								พัฒนาตัวเองกับ Up My Skill
							</BoxSubtitle>
						</Box>
					</BoxWrapper>
					<Cards>
						{cards.map((data, index) => <Card data={data} key={index} />)}
					</Cards>
				</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Pros)
