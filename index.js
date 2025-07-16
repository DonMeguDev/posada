//Elementos Platos
//Elementos Filete
const botonMenosFilete      = document.getElementById('botonMenosFilete');
const botonMasFilete        = document.getElementById('botonMasFilete');
const cantidadFilete        = document.getElementById('cantidadFilete');

//Elementos Conejo
const botonMenosConejo      = document.getElementById('botonMenosConejo');
const botonMasConejo        = document.getElementById('botonMasConejo');
const cantidadConejo        = document.getElementById('cantidadConejo');

//Elementos Guiso
const botonMenosGuiso       = document.getElementById('botonMenosGuiso');
const botonMasGuiso         = document.getElementById('botonMasGuiso');
const cantidadGuiso         = document.getElementById('cantidadGuiso');

//Elementos Verduras
const botonMenosVerduras    = document.getElementById('botonMenosVerduras');
const botonMasVerduras      = document.getElementById('botonMasVerduras');
const cantidadVerduras      = document.getElementById('cantidadVerduras');

//Elementos Tofu
const botonMenosTofu        = document.getElementById('botonMenosTofu');
const botonMasTofu          = document.getElementById('botonMasTofu');
const cantidadTofu          = document.getElementById('cantidadTofu');

//Elementos Pastel
const botonMenosPastel      = document.getElementById('botonMenosPastel');
const botonMasPastel        = document.getElementById('botonMasPastel');
const cantidadPastel        = document.getElementById('cantidadPastel');

//Elementos Panqueque
const botonMenosPanqueque   = document.getElementById('botonMenosPanqueque');
const botonMasPanqueque     = document.getElementById('botonMasPanqueque');
const cantidadPanqueque     = document.getElementById('cantidadPanqueque');

//Elementos Bebestibles
//Elementos Cerveza
const botonMenosCerveza     = document.getElementById('botonMenosCerveza');
const botonMasCerveza       = document.getElementById('botonMasCerveza');
const cantidadCerveza       = document.getElementById('cantidadCerveza');

//Elementos Pisco
const botonMenosPisco       = document.getElementById('botonMenosPisco');
const botonMasPisco         = document.getElementById('botonMasPisco');
const cantidadPisco         = document.getElementById('cantidadPisco');

//Elementos Whisky
const botonMenosWhisky      = document.getElementById('botonMenosWhisky');
const botonMasWhisky        = document.getElementById('botonMasWhisky');
const cantidadWhisky        = document.getElementById('cantidadWhisky');

//Elementos Cola
const botonMenosCola        = document.getElementById('botonMenosCola');
const botonMasCola          = document.getElementById('botonMasCola');
const cantidadCola          = document.getElementById('cantidadCola');

//Elementos Naranja
const botonMenosNaranja     = document.getElementById('botonMenosNaranja');
const botonMasNaranja       = document.getElementById('botonMasNaranja');
const cantidadNaranja       = document.getElementById('cantidadNaranja');

//Elementos Blanca
const botonMenosBlanca      = document.getElementById('botonMenosBlanca');
const botonMasBlanca        = document.getElementById('botonMasBlanca');
const cantidadBlanca        = document.getElementById('cantidadBlanca');

//Elementos Varios
//Elementos Descuento
const botonMenosDescuento   = document.getElementById('botonMenosDescuento');
const botonMasDescuento     = document.getElementById('botonMasDescuento');
const cantidadDescuento     = document.getElementById('cantidadDescuento');

const cantidadTotal         = document.getElementById('cantidadTotal');
const botonNuevoPedido      = document.getElementById('botonNuevoPedido');

//Variables
let cFilete     = 0;
let cConejo     = 0;
let cGuiso      = 0;
let cVerduras   = 0;
let cTofu       = 0;
let cPastel     = 0;
let cPanqueque  = 0;
let cCerveza    = 0;
let cPisco      = 0;
let cWhisky     = 0;
let cCola       = 0;
let cNaranja    = 0;
let cBlanca     = 0;
let cDescuento  = 0;
let cTotal      = 0;

// Funciones Filete
botonMenosFilete.addEventListener('click', () => {
    if(cFilete > 0){
        cFilete--;
    }
    cantidadFilete.innerHTML = cFilete;
    calcularTotal();
});

botonMasFilete.addEventListener('click', () => {
    cFilete++;
    cantidadFilete.innerHTML = cFilete;
    calcularTotal();
});

//Funciones Conejo
botonMenosConejo.addEventListener('click', () => {
    if(cConejo > 0){
        cConejo--;
    }
    cantidadConejo.innerHTML = cConejo;
    calcularTotal();
});

botonMasConejo.addEventListener('click', () => {
    cConejo++;
    cantidadConejo.innerHTML = cConejo;
    calcularTotal();
});

//Funciones Guiso
botonMenosGuiso.addEventListener('click', () => {
    if(cGuiso > 0){
        cGuiso--;
    }
    cantidadGuiso.innerHTML = cGuiso;
    calcularTotal();
});

botonMasGuiso.addEventListener('click', () => {
    cGuiso++;
    cantidadGuiso.innerHTML = cGuiso;
    calcularTotal();
});

//Funciones Verduras
botonMenosVerduras.addEventListener('click', () => {
    if(cVerduras > 0){
        cVerduras--;
    }
    cantidadVerduras.innerHTML = cVerduras;
    calcularTotal();
});

botonMasVerduras.addEventListener('click', () => {
    cVerduras++;
    cantidadVerduras.innerHTML = cVerduras;
    calcularTotal();
});

//Funciones Tofu
botonMenosTofu.addEventListener('click', () => {
    if(cTofu > 0){
        cTofu--;
    }
    cantidadTofu.innerHTML = cTofu;
    calcularTotal();
});

botonMasTofu.addEventListener('click', () => {
    cTofu++;
    cantidadTofu.innerHTML = cTofu;
    calcularTotal();
});

//Funciones Pastel
botonMenosPastel.addEventListener('click', () => {
    if(cPastel > 0){
        cPastel--;
    }
    cantidadPastel.innerHTML = cPastel;
    calcularTotal();
});

botonMasPastel.addEventListener('click', () => {
    cPastel++;
    cantidadPastel.innerHTML = cPastel;
    calcularTotal();
});

//Funciones Panqueque
botonMenosPanqueque.addEventListener('click', () => {
    if(cPanqueque > 0){
        cPanqueque--;
    }
    cantidadPanqueque.innerHTML = cPanqueque;
    calcularTotal();
});

botonMasPanqueque.addEventListener('click', () => {
    cPanqueque++;
    cantidadPanqueque.innerHTML = cPanqueque;
    calcularTotal();
});

//Funciones Cerveza
botonMenosCerveza.addEventListener('click', () => {
    if(cCerveza > 0){
        cCerveza--;
    }
    cantidadCerveza.innerHTML = cCerveza;
    calcularTotal();
});

botonMasCerveza.addEventListener('click', () => {
    cCerveza++;
    cantidadCerveza.innerHTML = cCerveza;
    calcularTotal();
});

//Funciones Pisco
botonMenosPisco.addEventListener('click', () => {
    if(cPisco > 0){
        cPisco--;
    }
    cantidadPisco.innerHTML = cPisco;
    calcularTotal();
});

botonMasPisco.addEventListener('click', () => {
    cPisco++;
    cantidadPisco.innerHTML = cPisco;
    calcularTotal();
});

//Funciones Whisky
botonMenosWhisky.addEventListener('click', () => {
    if(cWhisky > 0){
        cWhisky--;
    }
    cantidadWhisky.innerHTML = cWhisky;
    calcularTotal();
});

botonMasWhisky.addEventListener('click', () => {
    cWhisky++;
    cantidadWhisky.innerHTML = cWhisky;
    calcularTotal();
});

//Funciones Cola
botonMenosCola.addEventListener('click', () => {
    if(cCola > 0){
        cCola--;
    }
    cantidadCola.innerHTML = cCola;
    calcularTotal();
});

botonMasCola.addEventListener('click', () => {
    cCola++;
    cantidadCola.innerHTML = cCola;
    calcularTotal();
});

//Funciones Naranja
botonMenosNaranja.addEventListener('click', () => {
    if(cNaranja > 0){
        cNaranja--;
    }
    cantidadNaranja.innerHTML = cNaranja;
    calcularTotal();
});

botonMasNaranja.addEventListener('click', () => {
    cNaranja++;
    cantidadNaranja.innerHTML = cNaranja;
    calcularTotal();
});

//Funciones Blanca
botonMenosBlanca.addEventListener('click', () => {
    if(cBlanca > 0){
        cBlanca--;
    }
    cantidadBlanca.innerHTML = cBlanca;
    calcularTotal();
});

botonMasBlanca.addEventListener('click', () => {
    cBlanca++;
    cantidadBlanca.innerHTML = cBlanca;
    calcularTotal();
});

//Funciones Descuento
botonMenosDescuento.addEventListener('click', () => {
    if(cDescuento >= 5){
        cDescuento -= 5;
    }
    cantidadDescuento.innerHTML = cDescuento;
    calcularTotal();
});

botonMasDescuento.addEventListener('click', () => {
    if(cDescuento < 100){
        cDescuento += 5;
    }
    cantidadDescuento.innerHTML = cDescuento;
    calcularTotal();
});

botonNuevoPedido.addEventListener('click', () => {
    cFilete     = 0;
    cConejo     = 0;
    cGuiso      = 0;
    cVerduras   = 0;
    cTofu       = 0;
    cPastel     = 0;
    cPanqueque  = 0;
    cCerveza    = 0;
    cPisco      = 0;
    cWhisky     = 0;
    cCola       = 0;
    cNaranja    = 0;
    cBlanca     = 0;
    cDescuento  = 0;
    cTotal      = 0;
    cantidadFilete.innerHTML = cFilete;
    cantidadConejo.innerHTML = cConejo;
    cantidadGuiso.innerHTML = cGuiso;
    cantidadVerduras.innerHTML = cVerduras;
    cantidadTofu.innerHTML = cTofu;
    cantidadPastel.innerHTML = cPastel;
    cantidadPanqueque.innerHTML = cPanqueque;
    cantidadCerveza.innerHTML = cCerveza;
    cantidadPisco.innerHTML = cPisco;
    cantidadWhisky.innerHTML = cWhisky;
    cantidadCola.innerHTML = cCola;
    cantidadNaranja.innerHTML = cNaranja;
    cantidadBlanca.innerHTML = cBlanca;
    cantidadDescuento.innerHTML = cDescuento;
    cantidadTotal.innerHTML = cTotal;
})

function calcularTotal() {
    cTotal          = 0;
    cTotal          += (cFilete + cConejo + cGuiso + cVerduras + cTofu + cPastel + cPanqueque) * 150;
    cTotal          += (cCola + cNaranja + cBlanca) * 100;
    cTotal          += (cCerveza * 150) + (cPisco * 200) + (cWhisky * 250);
    cTotal          = (cTotal * (100 - cDescuento)) / 100;
    cantidadTotal.innerHTML = cTotal;
}