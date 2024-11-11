
function isMutant(adn) {

    const longitudADN = adn.length;
    let secuenciasEncontradas = 0;
  
    //* Función para verificar una secuencia en una dirección específica
    function verificarSecuencia(x, y, fila, columna) {

      const letra = adn[x][y];

      for (let i = 1; i < 4; i++) {
        
        const nx = x + i * fila;
        const ny = y + i * columna;

        if (nx < 0 || ny < 0 || nx >= longitudADN || ny >= longitudADN || adn[nx][ny] !== letra) return false;
        
      }
      return true;
    }
  
    for (let x = 0; x < longitudADN; x++) {
      for (let y = 0; y < longitudADN; y++) {

        if (adn[x][y]) {

          if ((y + 3 < longitudADN) && verificarSecuencia(x, y, 0, 1)) secuenciasEncontradas++; //HORIZONTAL
  
          if ((x + 3 < longitudADN) && verificarSecuencia(x, y, 1, 0)) secuenciasEncontradas++; //VERTICAL

          if ((x + 3 < longitudADN) && (y + 3 < longitudADN) && verificarSecuencia(x, y, 1, 1)) secuenciasEncontradas++; //DIAGONAL HACIA ABAJO
  
          if ((x + 3 < longitudADN) && (y - 3 >= 0) && verificarSecuencia(x, y, 1, -1)) secuenciasEncontradas++; //DIAGONAL HACIA LA IZQUIERDA
  
          if (secuenciasEncontradas >= 2) return true;
        }
      }
    }
    
    return false;
}
  

  const dna = [ 
    "ATGCGA", 
    "CAGTGC", 
    "TTATGT", 
    "AGAAGG", 
    "CCCCTA", 
    "TCACTG" 
];
  
console.log(isMutant(dna))