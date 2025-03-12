function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
  }
  
  module.exports = { filtrarPares };
  