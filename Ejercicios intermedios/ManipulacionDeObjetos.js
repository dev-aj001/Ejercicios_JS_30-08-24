Persona = {
    nombre: "Juan",
    edad: 19,
    ciudad: "Tepic",

    mostrarInfo: function() {
        console.log("Soy " 
        + this.nombre + " tengo " + this.edad + 
        " años y vivo en " + this.ciudad
        )
    }
}
Persona.mostrarInfo()