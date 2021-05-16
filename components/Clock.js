function Clock() {
  this.element = document.getElementById("clock");

  Clock.prototype.render = function (params) {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  };

  Clock.prototype.updateClock = function () {
    const date = new Date();
    let hour = date.getHours();
    if (hour < 10) hour = `0${hour}`;
    let minute = date.getMinutes();
    if (minute < 10) minute = `0${minute}`;
    this.element.innerHTML = `${hour}:${minute}`;
  };
}
