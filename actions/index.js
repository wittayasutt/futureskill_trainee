export const setTheme = theme => dispatch => {
	return dispatch({
		type: 'SET_THEME',
		theme
	})
}
