import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from '../molecules/card/carousel'

const Wrapper = styled.div`
	height: 50vh;
	max-height: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Cards = styled.div`
	height: 300px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;

	.left {
		left: 27%;
		transform: scale(0.8);
	}

	.right {
		right: 27%;
		transform: scale(0.8);
	}
`

const Points = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	padding-top: 32px;
`

const Point = styled.div`
	height: 10px;
	width: 10px;
	background: ${props => props.background};
	margin: 0 4px;
	border-radius: 50%;
	transition: 0.2s;
	cursor: pointer;
`

const card = [
	{
		name: 'Thanapa',
		career: 'นักเรียน',
		text:
			'0 ตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัว',
		image: 'static/images/mock/customer.jpg'
	},
	{
		name: 'Thanapa',
		career: 'นักเรียน',
		text:
			'1 ตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัว',
		image: 'static/images/mock/customer.jpg'
	},
	{
		name: 'Thanapa',
		career: 'นักเรียน',
		text:
			'2 ตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัว',
		image: 'static/images/mock/customer.jpg'
	},
	{
		name: 'Thanapa',
		career: 'นักเรียน',
		text:
			'3 ตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัว',
		image: 'static/images/mock/customer.jpg'
	},
	{
		name: 'Thanapa',
		career: 'นักเรียน',
		text:
			'4 ตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัวอย่างพารากราฟตัว',
		image: 'static/images/mock/customer.jpg'
	}
]

class Carousel extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			card: [],
			selected: 0
		}
	}

	componentDidMount() {
		this.setState({ card })
	}

	slideCard = index => {
		// let { card } = this.state

		// if (index === 1) {
		// 	const first = card.shift()
		// 	card.push(first)
		// } else if (index === 4) {
		// 	const last = card.pop()
		// 	card.unshift(last)
		// }

		this.setState({ selected: index })
	}

	render() {
		const { theme } = this.props
		const { card, selected } = this.state

		let left = selected - 1
		if (left < 0) left = card.length - 1
		let right = selected + 1
		if (right >= card.length) right = 0

		return (
			<Wrapper>
				<Cards>
					<Card
						className={'left'}
						data={card[left]}
						index={left}
						slideCard={this.slideCard}
					/>
					<Card
						className={'center'}
						data={card[selected]}
						index={selected}
						slideCard={this.slideCard}
					/>
					<Card
						className={'right'}
						data={card[right]}
						index={right}
						slideCard={this.slideCard}
					/>
					{/* {card.map((data, index) => (
						<Card
							data={data}
							index={index}
							key={index}
							slideCard={this.slideCard}
						/>
					))} */}
				</Cards>
				<Points>
					{card.map((data, index) => (
						<Point
							background={index === selected ? theme.primary : theme.neutral}
							onClick={() => this.slideCard(index)}
							key={index}
						/>
					))}
				</Points>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Carousel)
