import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hexToRgb } from 'utils'

import Button from '../atoms/button'
import Card from '../molecules/card'
import RecommendCard from '../molecules/card/recommend'

const Wrapper = styled.div`
	background: url('static/images/home_bg2.png');
	background-position: right;
	background-repeat: no-repeat;
	background-size: cover;
`

const Container = styled.div`
	min-height: 100vh;
	max-height: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Label = styled.h3`
	width: 100%;
`

const Corses = styled.div`
	flex-flow: row wrap;
`

const recommend = {
	name:
		'Real World PHP AJAX And Report สร้างเว็บไซต์และพัฒนาระบบงานในองค์กรแบบใช้งานจริง ด้วย PHP และ AJAX',
	user: 'Thanapa',
	viewers: 1000,
	time: 1220
}

const data = [
	{
		name:
			'Real World PHP AJAX And Report สร้างเว็บไซต์และพัฒนาระบบงานในองค์กรแบบใช้งานจริง ด้วย PHP และ AJAX',
		user: 'Thanapa',
		viewers: 1000,
		time: 1220
	},
	{
		name: '7 ไอเดียทำ PowerPoint เพื่อผลลัพธ์การนำเสนอที่ดีกว่า',
		user: 'Thanapa',
		viewers: 1000,
		time: 1220
	},
	{
		name: 'มือใหม่ อยากเล่นหุ้น',
		user: 'Thanapa',
		viewers: 1000,
		time: 1220
	},
	{
		name: 'มือใหม่ อยากเล่นหุ้น',
		user: 'Thanapa',
		viewers: 1000,
		time: 1220
	},
	{
		name: 'มือใหม่ อยากเล่นหุ้น',
		user: 'Thanapa',
		viewers: 1000,
		time: 1220
	},
	{
		name: 'มือใหม่ อยากเล่นหุ้น',
		user: 'Thanapa',
		viewers: 1000,
		time: 1220
	}
]

class Recommend extends Component {
	render() {
		return (
			<Wrapper>
				<Container className="container">
					<Label>คอร์สแนะนำ</Label>
					<Corses className="columns">
						<RecommendCard data={recommend}>Card</RecommendCard>
						{data.map((d, index) => (
							<Card data={d} key={index}>
								Card
							</Card>
						))}
					</Corses>

					<Button style={{ marginTop: '50px' }}>ดูคอร์สทั้งหมด</Button>
				</Container>
			</Wrapper>
		)
	}
}

export default Recommend
