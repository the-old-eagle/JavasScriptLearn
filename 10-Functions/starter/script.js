"use strict";

(function runOnce() {
  console.log("this function only run once");
})();

(() => console.log("this wull also never run again"))();
