function LinearPercentage({ elementId, totalItem, direction }) {
  this.element = document.getElementById(elementId);
  this.totalItem = totalItem;
  this.direction = direction;
  this.data = undefined;

  LinearPercentage.prototype.render = function () {
    this.createItems();
  };

  LinearPercentage.prototype.createItems = function () {
    for (let i = 0; i < this.totalItem; i++) {
      const item = document.createElement("div");
      item.className = `${this.element.id}-item`;
      this.element.appendChild(item);
    }
  };

  LinearPercentage.prototype.calculateTargetIndexByPercent = function () {
    return (this.totalItem * this.data) / 100;
  };

  LinearPercentage.prototype.updatePercentReversely = function () {
    const targetIndex = Math.floor(this.calculateTargetIndexByPercent());

    for (let i = 0; i < this.totalItem; i++) {
      if (targetIndex === this.totalItem) {
        this.element.children[i].classList.remove("active");
        this.element.children[i].classList.add("error");
      } else if (i < targetIndex) {
        this.element.children[i].classList.remove("error");
        this.element.children[i].classList.add("active");
      } else {
        this.element.children[i].classList.remove("error");
        this.element.children[i].classList.remove("active");
      }
    }
  };

  LinearPercentage.prototype.updatePercentDirectly = function () {
    const targetIndex = Math.floor(
      this.calculateTargetIndexByPercent(this.data, this.totalItem)
    );
    for (let i = 0; i < this.totalItem; i++) {
      if (i < targetIndex) {
        this.element.children[this.totalItem - 1 - i].classList.add("active");
      } else {
        this.element.children[this.totalItem - 1 - i].classList.remove(
          "active"
        );
      }
    }
  };

  LinearPercentage.prototype.receiveSensorData = function (data) {
    this.data = data;
    if (this.direction === "row") {
      this.updatePercentReversely();
    }
    if (this.direction === "column") {
      this.updatePercentDirectly();
    }
  };
}
