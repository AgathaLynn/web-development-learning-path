// super

var clock = {
  tick(times, cb = function() {}) {
    var ticks = 0;
    var tock = setInterval(function() {
      console.log("tick-tock");
      ticks += 1;

      if (ticks >= times) {
        setTimeout(cb, 1000);
        clearInterval(tock);
      }
    }, 1000);
  }
};

var alarmClock = {
  tick(curr, alarm) {
    super.tick(alarm - curr, alarmClock.bzzz);
  },
  bzzz() {
    console.log("BZZZZZZ!");
  }
};

Object.setPrototypeOf(alarmClock, clock);

//console.log("\nCLOCK\n_____");
//clock.tick(5);

console.log("\nALARM CLOCK\n___________");
alarmClock.tick(8, 12);
