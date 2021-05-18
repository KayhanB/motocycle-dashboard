new Clock().render();

// ************* RPM *************
const Rpm = new LinearPercentage({
  elementId: "rpm",
  totalItem: 24,
  direction: "row",
});

Rpm.render();

// makes rpm lines like funnel
for (let i = 0; i < Rpm.totalItem; i++) {
  const h = i * 2;
  Rpm.element.children.item(i).style = `height:${h + 12}px`;
}

setInterval(() => {
  const data = Math.random() * 100;
  Rpm.receiveSensorData(data);
}, 100);

// ************* MOVEMENT *************
const movement = new Movement();

movement.render();

setInterval(() => {
  const data = Math.random() * 100;
  movement.receiveSpeedSensorData(360);
}, 10);

// ************* FUEL *************
const Fuel = new LinearPercentage({
  elementId: "fuel",
  totalItem: 10,
  direction: "column",
});

Fuel.render();

Fuel.receiveSensorData(50);

// ************* GEAR *************
// true = in gear false = gear free
const gear = new Gear();

gear.setGearPosition(false);

// ************* TEMP *************
const Temp = new LinearPercentage({
  elementId: "temp",
  totalItem: 10,
  direction: "column",
});

Temp.render();

Temp.receiveSensorData(70);

// ************* GYRO *************
// true = in gear false = gear free
const gyro = new Gyroscope();

gyro.setGyroDegree(200);
