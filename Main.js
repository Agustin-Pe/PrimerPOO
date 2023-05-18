const Ejercito = require('./Ejercito');
const Piquero = require('./Piquero');
const Arquero = require('./Arquero');
const Caballero = require('./Caballero');

// Creo los ejércitos
const ejercito1 = new Ejercito('Chinos', 2, 25, 2);
const ejercito2 = new Ejercito('Ingleses', 10, 10, 10);

// Se realiza la batalla
const ganador = ejercito1.atacar(ejercito2);

if (ganador) {
  console.log(`El ejército ${ganador.civilizacion} ganó la batalla.`);
} else {
  console.log('La batalla terminó en empate.');
}
