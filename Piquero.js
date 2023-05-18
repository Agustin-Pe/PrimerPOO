const Unidad = require('./Unidad');

class Piquero extends Unidad {
  constructor() {
    super();
    this.puntosFuerza = 5;
  }
}

module.exports = Piquero;
