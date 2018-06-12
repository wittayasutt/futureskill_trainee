import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import theme from 'styles/theme'
import { makeStore } from '../store/configureStore'
import { setTheme } from '../actions'

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		ctx.store.dispatch(setTheme(theme))

		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {}

		return { pageProps }
	}

	render() {
		const { Component, pageProps, store } = this.props
		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withRedux(makeStore)(MyApp)
