/**
 * 
 * @param {String} carta 
 * @return {HTMLElement} elemento html de retorno
 */
export const crearCarta = (carta)=>{
    if(!carta)throw new error('La carta es un argumento obligatorio ');
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
}