const qs = require("query-string");

module.exports = function (number) {

	const query = typeof number === 'string'
		? number
		: qs.stringify(number, { arrayFormat: 'bracket' });

	const requestParams = typeof number === 'string'
		? `number=${number}`
		: `${query}`

	return requestParams
};