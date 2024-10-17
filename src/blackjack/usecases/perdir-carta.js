
/**
 * Esta funcion me permite ocupar una carta
 * @param {Array<string>} deck es un arreglo de string
 * @returns {string} retorna la carta del deck
 */


// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {
        // .!deck no existe, deck.length  tiene 0 cartas
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}