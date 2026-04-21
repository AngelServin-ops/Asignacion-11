export default class Persona{
    constructor(nombre="", edad=0){
        this.nombre=nombre,
        this.edad=edad;
        this.id=this.#generarId();
    }

    saludar(){
        return 'Hola, soy ${this.nombre}'
    }

    #generarId(){
        return Math.floor(Math.random()*1000)
    }
}