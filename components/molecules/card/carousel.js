import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Span from '../../atoms/span'

const Wrapper = styled.div`
	height: 300px;
	width: 30%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: absolute;
	background: #ffffff;
	border-radius: 4px;
	box-shadow: ${props =>
		props.className === 'center'
			? '0px 0px 35px rgba(0, 0, 0, 0.1)'
			: '0px 0px 35px rgba(0, 0, 0, 0.05)'};
	opacity: ${props => (props.className === 'center' ? 1 : 0.8)};
	z-index: ${props => (props.className === 'center' ? 2 : 1)};
	transition: 0.2s;
	user-select: none;
	cursor: pointer;

	:hover {
		box-shadow: ${props =>
			props.className === 'center'
				? '0px 0px 35px rgba(0, 0, 0, 0.15)'
				: '0px 0px 35px rgba(0, 0, 0, 0.1)'};
	}

	:active {
		box-shadow: ${props =>
			props.className === 'center'
				? '0px 0px 35px rgba(0, 0, 0, 0.1)'
				: '0px 0px 35px rgba(0, 0, 0, 0.05)'};
	}
`

const Left = styled.div`
	flex: 2;
	min-width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Right = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	padding: 40px 40px 40px 0;
`

const Top = styled.div`
	font-size: 14px;
`

const Bottom = styled.div`
	flex: 1;
	display: flex;
	align-items: flex-end;
`

const Image = styled.img`
	height: 120px;
	width: 120px;
	border-radius: 50%;
`

class Card extends Component {
	render() {
		const { data, index, slideCard, className } = this.props

		if (!data) return null
		return (
			<Wrapper
				index={index}
				onClick={() => slideCard(index)}
				className={className}
			>
				<Left>
					<Image src={data.image} alt="customer" />
				</Left>
				<Right>
					<Top>{data.text}</Top>
					<Bottom>
						<Span>
							{data.name}, {data.career}
						</Span>
					</Bottom>
				</Right>
			</Wrapper>
		)
	}
}

export default Card
