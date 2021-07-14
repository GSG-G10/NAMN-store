const {SearchByName} = require('./script/function')

const item = [{name:'cc'},{name:'zz'}]

describe('Testing SearchByName return array', () => {
	test('Should return 1 when given 1', () => {
		const actual = SearchByName('c',item)[0];
		const expected = {name: 'cc'};
		expect(actual).toEqual(expected);

	});
});

