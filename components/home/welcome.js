import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hexToRgb } from 'utils'

import Button from '../atoms/button'
import Span from '../atoms/span'

const Wrapper = styled.div`
	background: url('static/images/home_bg1.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

const Container = styled.div`
	height: 100vh;
	max-height: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.arrow-1 {
		top: 31%;
		left: 18%;
	}
	.arrow-2 {
		top: 19%;
		left: 62%;
	}
	.arrow-3 {
		top: 21%;
		left: 27%;
		transform: scale(0.65);
	}
	.arrow-4 {
		top: 36%;
		left: 31%;
		transform: scale(0.65);
	}
	.arrow-5 {
		top: 35%;
		left: 69%;
		transform: scale(0.65);
	}
`

const UpText = styled.h1`
	font-size: 32px;
	font-weight: 500;
	color: #ffffff;
	text-align: center;

	.up {
		font-size: 40px;
	}
`

const Tags = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: row;
	margin: 44px 0 80px;
`

const Tag = styled.div`
	height: 152px;
	width: 270px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background: #ffffff;
	margin: 0 16px;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
	user-select: none;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
		transform: translateY(10px);
	}

	:active {
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
		transform: translateY(0px);
	}
`

const TagImage = styled.img``

const TagText = styled.div`
	height: 24px;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.3);
	color: #ffffff;
	border-radius: 20px;
`

const Asterisk = styled.div`
	font-size: 14px;
	font-weight: 500;
	margin-top: 16px;
	opacity: 0.8;
`

const Arrow = styled.img`
	position: absolute;
	animation: fadeup 1.5s infinite;

	@keyframes fadeup {
		from {
			transform: translateY(0px);
			opacity: 1;
		}
		to {
			transform: translateY(-15px);
			opacity: 0;
		}
	}
`

const tagtexts = [
	{
		tag: 'ครีเอทีฟ',
		image: 'static/images/hom_icon1.png'
	},
	{
		tag: 'เทคโนโลยี',
		image: 'static/images/hom_icon2.png'
	},
	{
		tag: 'ธุรกิจ',
		image: 'static/images/hom_icon3.png'
	}
]

class Welcome extends Component {
	render() {
		const { theme } = this.props
		const rgb = hexToRgb(theme.secondary)

		return (
			<Wrapper>
				<Container className="container">
					<UpText>
						มา<span className="up">อัพสกิล</span>ของคุณ<br />พัฒนาสู่ความเป็นมืออาชีพ
					</UpText>
					<Tags>
						{tagtexts.map((tagtext, index) => (
							<Tag key={index}>
								<TagImage src={tagtext.image} alt={tagtext.tag} />
								<Span style={{ marginTop: '23px' }}>{tagtext.tag}</Span>
							</Tag>
						))}
					</Tags>
					<Button>ลงทะเบียน</Button>
					<Asterisk>ลงทะเบียนวันนี้ รับฟรี 2 เดือนแรก</Asterisk>

					<Arrow
						className="arrow-1"
						src="static/images/arrow.png"
						alt="arrow"
					/>
					<Arrow
						className="arrow-2"
						src="static/images/arrow.png"
						alt="arrow"
					/>
					<Arrow
						className="arrow-3"
						src="static/images/arrow.png"
						alt="arrow"
					/>
					<Arrow
						className="arrow-4"
						src="static/images/arrow.png"
						alt="arrow"
					/>
					<Arrow
						className="arrow-5"
						src="static/images/arrow.png"
						alt="arrow"
					/>
				</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Welcome)
