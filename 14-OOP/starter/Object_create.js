// Object.create
const PersonProto = {
  calcAge() {
    console.log(`PersonProto:the calc age is: ${2022 - this.birthYear}`);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1987;
steven.calcAge();

console.log(steven.__proto__ == PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2077);
sarah.calcAge();
