import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import stylesheet from 'styles/index.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from './atoms/button'

const Wrapper = styled.div`
	height: 60px;
	width: 100%;
	position: fixed;
	top: 0;
	background: ${props => (props.home ? 'transparent' : '#ffffff')};
	border-bottom: 1px solid
		${props => (props.home ? 'transparent' : props.neutral)};
	transition: 0.5s;
	z-index: 100;
`

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Left = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const Right = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const LogoWrapper = styled.div`
	height: 60px;
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

const Logo = styled.img``

const Categories = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	font-weight: 500;
	color: ${props => (props.home ? '#FFFFFF' : props.dark)};
	padding: 0 4px;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: ${props => (props.home ? props.secondary : props.primary)};
	}
`

const Bars = styled.i`
	margin-right: 8px;
`

const Courses = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	font-weight: 500;
	padding: 0 24px;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: ${props => props.primary};
	}
`

class Nav extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			mounted: false
		}
	}

	componentDidMount = () => {
		this.setState({ mounted: true })
	}

	render() {
		const { theme, url, home } = this.props
		const { mounted } = this.state
		
		return (
			<Wrapper neutral={theme.neutral} home={home}>
				{mounted && <style dangerouslySetInnerHTML={{ __html: stylesheet }} />}
				<Container className="container">
					<Left>
						<LogoWrapper>
							<Logo src="static/images/logo.png" alt="upmyskill" />
						</LogoWrapper>
						<Categories
							primary={theme.primary}
							secondary={theme.secondary}
							dark={theme.dark}
							home={home}
						>
							<Bars className="fas fa-bars" />
							หมวดหมู่
						</Categories>
					</Left>
					<Right>
						<Courses primary={theme.primary}>คอร์สทั้งหมด</Courses>
						<Button size="small">เข้าสู่ระบบ</Button>
					</Right>
				</Container>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Nav)
