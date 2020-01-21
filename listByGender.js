'use strict';

var people = [{
	name: 'Arisa',
	department: 'BP',
	gender: 'F'
}, {
	name: 'Ham',
	department: 'IT',
	gender: 'F'
}, {
	name: 'Alice',
	department: 'IT',
	gender: 'F'
}, {
	name: 'Anna',
	department: 'DA',
	gender: 'F'
}, {
	name: 'Larry',
	department: 'Sales',
	gender: 'M'
}, {
	name: 'Ria',
	department: 'Sales',
	gender: 'F'
}, {
	name: 'JD',
	department: 'Sales',
	gender: 'M'
}, {
	name: 'Thor',
	department: 'Sales',
	gender: 'M'
}, {
	name: 'Karl',
	department: 'Sales',
	gender: 'M'
}, {
	name: 'Rachel',
	department: 'Sales',
	gender: 'F'
}];

function listByGender(gender) {
	var obj = people.filter(function (obj) {
		return obj.gender == gender;
	});

	return obj;
}

function groupByDepartment(value) {
	var groupBy = function groupBy(key) {
		return function (array) {
			return array.reduce(function (objectsByKeyValue, obj) {
				var value = obj[key];
				objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
				return objectsByKeyValue;
			}, {});
		};
	};

	var group = groupBy(value);

	var obj = group(people);

	return obj;
}

console.log('Search By :');
console.log(listByGender('M'));
console.log('Group By :');
console.log(groupByDepartment('department'));