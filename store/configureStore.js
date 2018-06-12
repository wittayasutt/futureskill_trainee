import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { themeReducer } from '../reducers'

export const makeStore = (initialState = {}) => {
	const reducer = combineReducers({
		theme: themeReducer
	})

	const store = createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)

	return store
}
