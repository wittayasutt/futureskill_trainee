import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Button from '../atoms/button'

const Wrapper = styled.div`
	background: #f8f9ff;
`

const Container = styled.div`
	height: 30vh;
	max-height: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Text = styled.div`
	font-size: 32px;
	font-weight: 500;
  text-align: center;
`

class Register extends Component {
	render() {
		return (
			<Wrapper>
				<Container className="container">
					<Text>
						อัพสกิลของคุณกับ<br />บทเรียนกว่า 10,000 คอร์ส
					</Text>
					<Button style={{ marginTop: '40px' }}>ลงทะเบียน</Button>
				</Container>
			</Wrapper>
		)
	}
}

export default Register
