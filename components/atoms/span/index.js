import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hexToRgb } from 'utils'

const Span = styled.div`
	min-height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(${props => props.rgb}, 0.1);
	color: ${props => props.secondary};
	font-size: 14px;
	font-weight: 500;
	padding: 0 28px;
	border-radius: 20px;
`

class Wrapper extends Component {
	render() {
		let { theme, style } = this.props
		const rgb = hexToRgb(theme.secondary)

		return (
			<Span secondary={theme.secondary} rgb={rgb} style={style}>
				{this.props.children}
			</Span>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Wrapper)
