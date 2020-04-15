/*
var johne = {
	firstNmae: 'johne',
	lastName: 'smith',
	birthyeat: 1990,
	familyMamber: ['mark', 'bob', 'emily'],
	job: 'teacher',
	isMarried: false
};
console.log(johne.lastName);
var x = 'birthyeat';
console.log(johne[x]);


johne.job = 'disigner';
johne['isMarried'] = true;
console.log(johne);

var jane = new Object();
jane.firstNmae = 'jane';
janeBirthYear = 1969;
jane['lastName'] = 'shams'
console.log(jane);*/

//object and mathods//

/* var john = {
	firstNmae: 'john',
	lastName: 'smith',
	birthyear: 19999,
	familyMamber: ['jane', 'mark', 'bob', 'emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function () {
		this.age = 2018 - this.birthyear
	}
};
john.calcAge();
console.log(john);*/

/*var john = {
	fullName: 'john smith',
	mess: 922,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mess / (this.height * this.height)
		return this.bmi;
	}
}

var mark = {
	fullName: 'Mark miller',
	mess: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mess / (this.height * this.height)
		return this.bmi;
	}
}
if (john.calcBMI() > mark.calcBMI()) {
	console.log(john.fullName + ' has a heigher bmi of '
		+ john.bmi);
} else if (mark.bmi > john.bmi) {
	console.log(mark.fullName + ' has a higher bmi of'
		+ mark.bmi);
} else {
	console.log("they jav a same bmi");
}*/

/*var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);*/

// loping backwoard
/*var john = ['john', 'smith', 1990, 'designer', false,
	'hardy', 'mark', 1935, 'driver'];

for (var i = john.length - 1; i >= 0; i--) {
console.log(john[i]);
}*/

var john = {
	fullName: 'john smith',
	bills: [124, 48, 268, 180, 42],
	calcTip: function () {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++) {
			var percentAge;
			var bill = this.bills[i];
			if (bill < 50) {
				percentAge = 0.2;
			} else if (bill >= 50 &&
				bill < 200) {
				percentAge = 0.15;
			} else {
				percentAge = 0.1;
			}
			this.tips[i] = bill * percentAge;
			this.finalValues[i] = bill + bill * percentAge;
		}
	}

}
john.calcTip();
console.log(john);




