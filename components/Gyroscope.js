function Gyroscope(params) {
  this.element = document.getElementById("gyro");
  Gyroscope.prototype.setGyroDegree = function (degree) {
    this.element.style.cssText = `--gyroDegree: "${degree}°"; --gyroBackground:linear-gradient(${degree}deg, var(--passive) 50%, var(--active) 50%)`;
  };
}
