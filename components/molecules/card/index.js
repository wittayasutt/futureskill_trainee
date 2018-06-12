import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hexToRgb, numberWithCommas, toShortText, toShortTime } from 'utils'

const Wrapper = styled.div`
	padding: 15px !important;
`

const Card = styled.div`
	height: 250px;
	background: #ffffff;
	border-radius: 4px;
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

const Image = styled.div`
	height: 152px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	background: url('static/images/mock/course.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 8px;
`

const Time = styled.div`
	height: 16px;
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.5);
	color: #ffffff;
	font-size: 10px;
	border-radius: 10px;
`

const Text = styled.div`
	height: calc(100% - 152px);
	width: 100%;
	padding: 8px 16px;
`

const Name = styled.div`
	font-size: 14px;
	font-weight: 500;
`

const Detail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 12px;
	color: rgba(${props => props.rgb}, 0.8);
`

const Divide = styled.div`
	height: 10px;
	width: 2px;
	margin: 0 8px;
	background: ${props => props.dark};
	opacity: 0.3;
`

class CardWrapper extends Component {
	render() {
		let { theme, data } = this.props
		const rgb = hexToRgb(theme.dark)
		const time = data && data.time ? toShortTime(data.time) : '0h 0m'
		const name = data && data.name ? toShortText(data.name) : null
		const viewers = data && data.viewers ? numberWithCommas(data.viewers) : 0

		return (
			<Wrapper className="column is-one-quarter">
				<Card>
					<Image>
						<Time>{time}</Time>
					</Image>
					<Text>
						<Name>{name}</Name>
						<Detail rgb={rgb}>
							{data && data.user ? data.user : 'anonymous'}
							<Divide dark={theme.dark} />
							{viewers} ผู้เรียน
						</Detail>
					</Text>
				</Card>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(CardWrapper)
