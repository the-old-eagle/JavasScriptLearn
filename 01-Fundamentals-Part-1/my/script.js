"use strict";

// const colckTimer = setInterval(() => console.log(`${new Date()}`), 1000);

const html = `
      <div class="movements__row">
        <div class="colockTimer">${colckTimer}</div>
      </div>
    `;

containerMovements.innerHTML = "";
containerMovements.insertAdjacentHTML("afterbegin", html);
