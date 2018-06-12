export const themeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_THEME':
			return action.theme
		default:
			return state
	}
}
