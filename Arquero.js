const Unidad = require('./Unidad');

class Arquero extends Unidad {
  constructor() {
    super();
    this.puntosFuerza = 10;
  }
}

module.exports = Arquero;

