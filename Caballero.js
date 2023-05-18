const Unidad = require('./Unidad');

class Caballero extends Unidad {
  constructor() {
    super();
    this.puntosFuerza = 20;
  }
}

module.exports = Caballero;
