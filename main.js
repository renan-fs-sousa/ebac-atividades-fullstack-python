function Smartphone(sistema) {
    this.sistema = sistema;

    this.mostrarLogo = function() { 
        return this.logo;
    }

    this.mostrarInfoMin = function() {
        console.log(`Sistema: ${this.sistema}, Modelo: ${this.modelo}, Logo: ${this.mostrarLogo()}`);
    }

    this.mostrarInfoMax = function() {
        console.log(`Sistema: ${this.sistema}, Modelo: ${this.modelo}, Logo: ${this.mostrarLogo()}, Cor: ${this.cor}`);
    }

}

function Apple(sistema, modelo, logo) {
    this.modelo = modelo;
    this.logo = logo;

    Smartphone.call(this, sistema);
}

function Samsung(sistema, modelo, logo, cor) {
    this.modelo = modelo;
    this.logo = logo;
    this.cor = cor;
    
    Smartphone.call(this, sistema);
}

const galaxy_s24 = new Samsung('Android', 'Galaxy S24', 'robozinho verde', 'branco');
const iphone_15 = new Apple('iOS', 'Iphone 15 Pro', 'maçã');
const iphone_se = new Apple('iOS', 'Iphone SE', 'maçã');

iphone_15.mostrarLogo();
iphone_15.mostrarInfoMin();
iphone_se.mostrarLogo();
iphone_se.mostrarInfoMin();
galaxy_s24.mostrarLogo();
galaxy_s24.mostrarInfoMax(); 
