function Movement() {
  this.speedElement = document.getElementById("speed");
  this.tripElement = document.getElementById("trip");
  this.speed = 0;
  this.lastSpeed = 0;
  this.speedTimeFlag = new Date();
  this.trip = 0;
  this.db = new DB();

  Movement.prototype.render = function () {
    this.updateSpeed();
    this.updateTrip();
    this.trip = this.db.read().trip;
  };

  Movement.prototype.calculateTrip = function () {
    const passingSeconds = (new Date().getTime() - this.speedTimeFlag) / 1000;
    const distance = ((this.speed * 1000) / 3600) * passingSeconds;

    this.trip += distance;
    this.speedTimeFlag = new Date().getTime();
  };

  Movement.prototype.writeTripToDb = function () {
    this.db.write("trip", this.trip);
  };

  Movement.prototype.updateTrip = function () {
    this.tripElement.innerHTML = `${(this.trip / 1000).toFixed(1)} KM`;
  };

  Movement.prototype.updateSpeed = function () {
    this.speedElement.innerHTML = this.speed;
  };

  Movement.prototype.receiveSpeedSensorData = function (data) {
    this.speed = Math.round(data);
    this.updateSpeed();
    this.calculateTrip();
    this.updateTrip();
    this.writeTripToDb();
  };
}
