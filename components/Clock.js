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
    const hour = date.getHours();
    const minute = date.getMinutes();
    this.element.innerHTML = `${hour}:${minute}`;
  };
}
