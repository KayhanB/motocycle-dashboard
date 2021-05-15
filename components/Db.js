const fs = require("fs");

function DB() {
  this.path = "db.json";

  DB.prototype.read = function () {
    return JSON.parse(fs.readFileSync(this.path).toString());
  };

  DB.prototype.write = function (key, value) {
    const db = this.read();
    db[key] = value;
    fs.writeFileSync(this.path, JSON.stringify(db));
  };
}
