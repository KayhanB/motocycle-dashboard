function Gear(params) {
  this.element = document.getElementById("gear");
  Gear.prototype.setGearPosition = function (inGear) {
    if (inGear) {
      this.element.classList.remove("gear-active");
    } else {
      this.element.classList.add("gear-free");
    }
  };
}
