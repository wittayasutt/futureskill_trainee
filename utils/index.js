let utils = {}

utils.hexToRgb = hex => {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b
	})

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? `${parseInt(result[1], 16)},
			${parseInt(result[2], 16)},
			${parseInt(result[3], 16)}`
		: null
}

utils.numberWithCommas = number => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

utils.toShortText = text => {
	const size = 90

	if (text.length > size) {
		text = text.substring(0, size).trim() + '...'
	}
	return text
}

utils.toShortTime = time => {
	const h = parseInt(time / 60)
	const m = parseInt(time % 60)
	return h + 'h ' + m + 'm'
}

module.exports = utils
