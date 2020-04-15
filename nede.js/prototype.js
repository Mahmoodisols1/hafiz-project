function student() {
    this.name = 'Mahmood';
    this.age = 34;
}

student.prototype = {
    address: 'pishawar',
    getName: function () {
        return this.name;
    }
}

var stu = new student();
var abc = stu.getName();
console.log(abc);