const areaCalculation = {
  square: (side) => Math.pow(side, 2),
  rectangle: (base, height) => base * height,
  triangle: (base, height) => (base * height)/2,
  circle: (radius) => Math.PI * Math.pow(radius, 2),
}

module.exports = { areaCalculation }
