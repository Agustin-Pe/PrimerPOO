class Ejercito {
    constructor(civilizacion, piqueros, arqueros, caballeros) {
      this.civilizacion = civilizacion;
      this.piqueros = piqueros;
      this.arqueros = arqueros;
      this.caballeros = caballeros;
      this.historialBatallas = [];
      this.monedasOro = 1000;
    }
  
    atacar(ejercito) {
      const puntosEjercito1 = this.calcularPuntos();
      const puntosEjercito2 = ejercito.calcularPuntos();
  
      if (puntosEjercito1 > puntosEjercito2) {
        this.ganarBatalla(ejercito);
        return this;
      } else if (puntosEjercito2 > puntosEjercito1) {
        ejercito.ganarBatalla(this);
        return ejercito;
      } else {
        this.empatarBatalla(ejercito);
        return null;
      }
    }
  
    calcularPuntos() {
      const puntosPiqueros = this.piqueros * 5;
      const puntosArqueros = this.arqueros * 10;
      const puntosCaballeros = this.caballeros * 20;
      return puntosPiqueros + puntosArqueros + puntosCaballeros;
    }
  
    ganarBatalla(ejercitoPerdedor) {
      this.monedasOro += 100;
      ejercitoPerdedor.perderUnidades(2);
    }
  
    empatarBatalla(ejercito) {
      this.perderUnidades(1);
      ejercito.perderUnidades(1);
    }
  
    perderUnidades(cantidad) {
      if (this.caballeros >= cantidad) {
        this.caballeros -= cantidad;
      } else if (this.arqueros >= cantidad) {
        this.arqueros -= cantidad;
      } else if (this.piqueros >= cantidad) {
        this.piqueros -= cantidad;
      }
    }
  }
  
  module.exports = Ejercito;
  
