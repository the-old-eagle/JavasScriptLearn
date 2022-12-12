'use strict';

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get owner() {
    return this._owner;
  },

  set owner(name) {
    console.log(name);
    if (!name.includes(' ')) {
      alert('owner name is not a full name!');
    } else {
      name = this._owner;
    }
  },

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 20;
console.log(account.movements);
account.owner = 'test ';
