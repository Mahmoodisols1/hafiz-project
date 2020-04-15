class User {
    constructor() {
        this.name = 'Hafiz Mahmoos';
        this.age = 29;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
var user = new User();
console.log(user);