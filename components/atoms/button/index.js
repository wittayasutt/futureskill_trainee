import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hexToRgb } from 'utils'

const Button = styled.div`
	height: ${props => (props.size === 'small' ? '32px' : '40px')};
	width: ${props => (props.size === 'small' ? '100px' : '180px')};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => (props.type === 'ghost' ? props.primary : '#FFFFFF')};
	font-size: ${props => (props.size === 'small' ? '14px' : '16px')};
	font-weight: 500;
	border: 1px solid ${props => props.primary};
	border-radius: 20px;
	transition: 0.4s;
	cursor: pointer;

	${props => props.type !== 'ghost' && 'background:' + props.primary};
	${props =>
		props.type !== 'ghost' && 'box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)'};

	:hover {
		${props =>
			props.type === 'ghost'
				? null
				: 'box-shadow: 0px 5px 10px rgba(0, 0, 0, 0)'};
	}

	:active {
		background: rgba(${props => props.rgb}, 0.8);
	}
`

class Wrapper extends Component {
	render() {
		let { theme, size, type, style } = this.props
		const rgb = hexToRgb(theme.primary)

		return (
			<Button
				primary={theme.primary}
				rgb={rgb}
				size={size ? size : 'default'}
				type={type ? type : 'default'}
				style={style}
			>
				{this.props.children}
			</Button>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Wrapper)
