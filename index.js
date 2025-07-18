//Elementos Platos
//Elementos Filete
const botonMenosDiezFilete      = document.getElementById('botonMenosDiezFilete');
const botonMenosFilete          = document.getElementById('botonMenosFilete');
const botonMasFilete            = document.getElementById('botonMasFilete');
const botonMasDiezFilete        = document.getElementById('botonMasDiezFilete');
const cantidadFilete            = document.getElementById('cantidadFilete');

//Elementos Conejo
const botonMenosDiezConejo      = document.getElementById('botonMenosDiezConejo');
const botonMenosConejo          = document.getElementById('botonMenosConejo');
const botonMasConejo            = document.getElementById('botonMasConejo');
const botonMasDiezConejo        = document.getElementById('botonMasDiezConejo');
const cantidadConejo            = document.getElementById('cantidadConejo');

//Elementos Guiso
const botonMenosDiezGuiso       = document.getElementById('botonMenosDiezGuiso');
const botonMenosGuiso           = document.getElementById('botonMenosGuiso');
const botonMasGuiso             = document.getElementById('botonMasGuiso');
const botonMasDiezGuiso         = document.getElementById('botonMasDiezGuiso');
const cantidadGuiso             = document.getElementById('cantidadGuiso');

//Elementos Verduras
const botonMenosDiezVerduras    = document.getElementById('botonMenosDiezVerduras');
const botonMenosVerduras        = document.getElementById('botonMenosVerduras');
const botonMasVerduras          = document.getElementById('botonMasVerduras');
const botonMasDiezVerduras      = document.getElementById('botonMasDiezVerduras');
const cantidadVerduras          = document.getElementById('cantidadVerduras');

//Elementos Tofu
const botonMenosDiezTofu        = document.getElementById('botonMenosDiezTofu');
const botonMenosTofu            = document.getElementById('botonMenosTofu');
const botonMasTofu              = document.getElementById('botonMasTofu');
const botonMasDiezTofu          = document.getElementById('botonMasDiezTofu');
const cantidadTofu              = document.getElementById('cantidadTofu');

//Elementos Pastel
const botonMenosDiezPastel      = document.getElementById('botonMenosDiezPastel');
const botonMenosPastel          = document.getElementById('botonMenosPastel');
const botonMasPastel            = document.getElementById('botonMasPastel');
const botonMasDiezPastel        = document.getElementById('botonMasDiezPastel');
const cantidadPastel            = document.getElementById('cantidadPastel');

//Elementos Panqueque
const botonMenosDiezPanqueque   = document.getElementById('botonMenosDiezPanqueque');
const botonMenosPanqueque       = document.getElementById('botonMenosPanqueque');
const botonMasPanqueque         = document.getElementById('botonMasPanqueque');
const botonMasDiezPanqueque     = document.getElementById('botonMasDiezPanqueque');
const cantidadPanqueque         = document.getElementById('cantidadPanqueque');

//Elementos Bebestibles
//Elementos Cerveza
const botonMenosDiezCerveza     = document.getElementById('botonMenosDiezCerveza');
const botonMenosCerveza         = document.getElementById('botonMenosCerveza');
const botonMasCerveza           = document.getElementById('botonMasCerveza');
const botonMasDiezCerveza       = document.getElementById('botonMasDiezCerveza');
const cantidadCerveza           = document.getElementById('cantidadCerveza');

//Elementos Pisco
const botonMenosDiezPisco       = document.getElementById('botonMenosDiezPisco');
const botonMenosPisco           = document.getElementById('botonMenosPisco');
const botonMasPisco             = document.getElementById('botonMasPisco');
const botonMasDiezPisco         = document.getElementById('botonMasDiezPisco');
const cantidadPisco             = document.getElementById('cantidadPisco');

//Elementos Whisky
const botonMenosDiezWhisky      = document.getElementById('botonMenosDiezWhisky');
const botonMenosWhisky          = document.getElementById('botonMenosWhisky');
const botonMasWhisky            = document.getElementById('botonMasWhisky');
const botonMasDiezWhisky        = document.getElementById('botonMasDiezWhisky');
const cantidadWhisky            = document.getElementById('cantidadWhisky');

//Elementos Cola
const botonMenosDiezCola        = document.getElementById('botonMenosDiezCola');
const botonMenosCola            = document.getElementById('botonMenosCola');
const botonMasCola              = document.getElementById('botonMasCola');
const botonMasDiezCola          = document.getElementById('botonMasDiezCola');
const cantidadCola              = document.getElementById('cantidadCola');

//Elementos Naranja
const botonMenosDiezNaranja     = document.getElementById('botonMenosDiezNaranja');
const botonMenosNaranja         = document.getElementById('botonMenosNaranja');
const botonMasNaranja           = document.getElementById('botonMasNaranja');
const botonMasDiezNaranja       = document.getElementById('botonMasDiezNaranja');
const cantidadNaranja           = document.getElementById('cantidadNaranja');

//Elementos Blanca
const botonMenosDiezBlanca      = document.getElementById('botonMenosDiezBlanca');
const botonMenosBlanca          = document.getElementById('botonMenosBlanca');
const botonMasBlanca            = document.getElementById('botonMasBlanca');
const botonMasDiezBlanca        = document.getElementById('botonMasDiezBlanca');
const cantidadBlanca            = document.getElementById('cantidadBlanca');

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
botonMenosDiezFilete.addEventListener('click', () => {
    if(cFilete >= 10){
        cFilete-=10;
    }
    cantidadFilete.innerHTML = cFilete;
    calcularTotal();
});

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

botonMasDiezFilete.addEventListener('click', () => {
    cFilete+=10;
    cantidadFilete.innerHTML = cFilete;
    calcularTotal();
});

//Funciones Conejo
botonMenosDiezConejo.addEventListener('click', () => {
    if(cConejo >= 10){
        cConejo-=10;
    }
    cantidadConejo.innerHTML = cConejo;
    calcularTotal();
});

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

botonMasDiezConejo.addEventListener('click', () => {
    cConejo+=10;
    cantidadConejo.innerHTML = cConejo;
    calcularTotal();
});

//Funciones Guiso
botonMenosDiezGuiso.addEventListener('click', () => {
    if(cGuiso >= 10){
        cGuiso-=10;
    }
    cantidadGuiso.innerHTML = cGuiso;
    calcularTotal();
});

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

botonMasDiezGuiso.addEventListener('click', () => {
    cGuiso+=10;
    cantidadGuiso.innerHTML = cGuiso;
    calcularTotal();
});

//Funciones Verduras
botonMenosDiezVerduras.addEventListener('click', () => {
    if(cVerduras >= 10){
        cVerduras-=10;
    }
    cantidadVerduras.innerHTML = cVerduras;
    calcularTotal();
});

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

botonMasDiezVerduras.addEventListener('click', () => {
    cVerduras+=10;
    cantidadVerduras.innerHTML = cVerduras;
    calcularTotal();
});

//Funciones Tofu
botonMenosDiezTofu.addEventListener('click', () => {
    if(cTofu >= 10){
        cTofu-=10;
    }
    cantidadTofu.innerHTML = cTofu;
    calcularTotal();
});

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

botonMasDiezTofu.addEventListener('click', () => {
    cTofu+=10;
    cantidadTofu.innerHTML = cTofu;
    calcularTotal();
});

//Funciones Pastel
botonMenosDiezPastel.addEventListener('click', () => {
    if(cPastel >= 10){
        cPastel-=10;
    }
    cantidadPastel.innerHTML = cPastel;
    calcularTotal();
});

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

botonMasDiezPastel.addEventListener('click', () => {
    cPastel+=10;
    cantidadPastel.innerHTML = cPastel;
    calcularTotal();
});

//Funciones Panqueque
botonMenosDiezPanqueque.addEventListener('click', () => {
    if(cPanqueque >= 10){
        cPanqueque-=10;
    }
    cantidadPanqueque.innerHTML = cPanqueque;
    calcularTotal();
});

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

botonMasDiezPanqueque.addEventListener('click', () => {
    cPanqueque+=10;
    cantidadPanqueque.innerHTML = cPanqueque;
    calcularTotal();
});

//Funciones Cerveza
botonMenosDiezCerveza.addEventListener('click', () => {
    if(cCerveza >= 10){
        cCerveza-=10;
    }
    cantidadCerveza.innerHTML = cCerveza;
    calcularTotal();
});

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

botonMasDiezCerveza.addEventListener('click', () => {
    cCerveza+=10;
    cantidadCerveza.innerHTML = cCerveza;
    calcularTotal();
});

//Funciones Pisco
botonMenosDiezPisco.addEventListener('click', () => {
    if(cPisco >= 10){
        cPisco-=10;
    }
    cantidadPisco.innerHTML = cPisco;
    calcularTotal();
});

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

botonMasDiezPisco.addEventListener('click', () => {
    cPisco+=10;
    cantidadPisco.innerHTML = cPisco;
    calcularTotal();
});

//Funciones Whisky
botonMenosDiezWhisky.addEventListener('click', () => {
    if(cWhisky >= 10){
        cWhisky-=10;
    }
    cantidadWhisky.innerHTML = cWhisky;
    calcularTotal();
});

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

botonMasDiezWhisky.addEventListener('click', () => {
    cWhisky+=10;
    cantidadWhisky.innerHTML = cWhisky;
    calcularTotal();
});

//Funciones Cola
botonMenosDiezCola.addEventListener('click', () => {
    if(cCola >= 10){
        cCola-=10;
    }
    cantidadCola.innerHTML = cCola;
    calcularTotal();
});

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

botonMasDiezCola.addEventListener('click', () => {
    cCola+=10;
    cantidadCola.innerHTML = cCola;
    calcularTotal();
});

//Funciones Naranja
botonMenosDiezNaranja.addEventListener('click', () => {
    if(cNaranja >= 10){
        cNaranja-=10;
    }
    cantidadNaranja.innerHTML = cNaranja;
    calcularTotal();
});

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

botonMasDiezNaranja.addEventListener('click', () => {
    cNaranja+=10;
    cantidadNaranja.innerHTML = cNaranja;
    calcularTotal();
});

//Funciones Blanca
botonMenosDiezBlanca.addEventListener('click', () => {
    if(cBlanca >= 10){
        cBlanca-=10;
    }
    cantidadBlanca.innerHTML = cBlanca;
    calcularTotal();
});

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

botonMasDiezBlanca.addEventListener('click', () => {
    cBlanca+=10;
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