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
	background-position: left;
	background-repeat: no-repeat;
	background-size: auto 100vh;
`

const Container = styled.div`
	height: 100vh;
	max-height: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const UpText = styled.h1`
	width: 355px;
	font-size: 32px;
	font-weight: 500;
	text-align: center;
	margin: 16px 0 40px;
`

const Tags = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: row;
	margin-top: 80px;
`

const Tag = styled.div`
	height: 152px;
	width: 270px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background: linear-gradient(
			to right,
			${props => props.primary}\,
			${props => props.secondary}
		)
		fixed;
	background-position: center;
	background-size: calc(270px * 3 + 32px * 2 + 10px);
	margin: 0 16px;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
	transition: 0.2s;
	cursor: pointer;

	:hover {
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
	}

	:active {
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
	}
`

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

const tagtexts = ['ครีเอทีฟ', 'เทคโนโลยี', 'ธุรกิจ']

class Welcome extends Component {
	render() {
		const { theme } = this.props
		const rgb = hexToRgb(theme.secondary)

		return (
			<Wrapper>
				<Container className="container">
					<Span>ลงทะเบียนวันนี้ รับฟรี 2 เดือนแรก</Span>
					<UpText>มาอัพสกิลของคุณ พัฒนาสู่ความเป็นมืออาชีพ</UpText>
					<Button>ลงทะเบียน</Button>
					<Tags>
						{tagtexts.map((tagtext, index) => (
							<Tag
								primary={theme.primary}
								secondary={theme.secondary}
								key={index}
							>
								<TagText>{tagtext}</TagText>
							</Tag>
						))}
					</Tags>
				</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Welcome)
