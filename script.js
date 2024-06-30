const API = "https://random-word-api.herokuapp.com/word?length=5"
fetch(API).then((response)=>{
    response.json().then((data)=>{
    palabraSecreta = data[0].toUpperCase()
    console.log(data)
})
})

let diccionario = ["APPLE","ANGEL","MOUSE","HOUSE","TABLE","PLACE","WHITE","BLACK","GRENN"]
let random= Math.random()*diccionario.length
random = Math.floor(random)

let palabraSecreta = diccionario[random]
let intentos = 6


let button = document.getElementById("guess-button");
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")
button.addEventListener("click", intentar);

function intentar(){
    
    const intento = leerIntento();
    if (intento.length !== 5){
        alert("SOLO PALABRAS DE 5 LETRAS");
        return;
    }
    const grid = document.getElementById("grid");
    const row = document.createElement("div");
    row.className = "row";
    console.log(row);

    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        
        if (intento[i]===palabraSecreta[i]){
            letra.style.backgroundColor = "green"
        } else if( palabraSecreta.includes(intento[i]) ) {
            letra.style.backgroundColor = "yellow"
        } else {
            letra.style.backgroundColor = "gray"
        }
        row.appendChild(letra)
    }

    console.log(row);
    grid.appendChild(row);
    
    if (intento === palabraSecreta){
        console.log("Ganaste!!");
        terminar("<h2>GANASTE!</h2>");
        return;
    }
    intentos--
    if (intentos==0){
        
        terminar("<h3>PERDISTE. La palabra era: " + palabraSecreta, );
}

function leerIntento(){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase();
    return INTENTO;
}

function terminar (mensaje, clase) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'mensaje ' + clase;
    mensajeDiv.innerHTML = mensaje;
    document.body.appendChild(mensajeDiv);
    input.disabled = true;
    button.disabled = true;
}
}