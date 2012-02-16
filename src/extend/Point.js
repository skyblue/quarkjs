
(function(){

// point.js

var Point = Quark.Point = function Point(x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.distance = function (point) {
  var a = point.x - this.x;
  var b = point.y - this.y;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

Point.prototype.distanceX = function (point) {
  return Math.abs(this.x - point.x);
};

Point.prototype.distanceY = function (point) {
  return Math.abs(this.y - point.y);
};

Point.prototype.interpolate = function (point, pct) {
  var x = this.x + ((point.x - this.x) * pct);
  var y = this.y + ((point.y - this.y) * pct);
  return new Point(x, y);
};

Point.prototype.offset = function (x, y) {
  return new Point(this.x + x, this.y + y);
};

Point.prototype.vector = function (point) {
  return new Point(point.x - this.x, point.y - this.y);
};

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

Point.prototype.clone = function(){
    return new Point(this.x, this.y);
};

Point.prototype.toString = function(){
    return "(x=" + this.x + ", y=" + this.y + ")";
};

// static
Point.fromElement = function (element) {
  return new Point(element.offsetLeft, element.offsetTop);
};

// static
Point.fromEvent = function (evt) {
  return new Point(evt.x || evt.clientX, evt.y || evt.clientY);
};

})();