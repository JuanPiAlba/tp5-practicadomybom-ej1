let botonIniciar = document.getElementById("inicioJuego");
let botonEnviar = document.getElementById("enviarNumero");
let seccionalert = document.getElementById('alert')

let numeroUsuario;
let numeroMagico;
let intento = 0;

botonIniciar.addEventListener("click", generarNumero);
botonEnviar.addEventListener("submit", capturarNumero);

function generarNumero() {
  numeroMagico = Math.floor(Math.random() * (99 - 1) + 1);
  intento = 0;
  return numeroMagico
}

function capturarNumero(e) {
  e.preventDefault();
  let numeroUsuario1 = Number(document.getElementById("numeroUsuario").value);


  if (numeroUsuario1 === numeroMagico) {
    let alert = document.createElement('p');
    alert.innerHTML = `<div class="alert alert-success" role="alert">Adivinasteeee</div>`;
    seccionalert.appendChild(alert)
  }
  if (numeroUsuario1 > numeroMagico) {
    let alert = document.createElement("p");
    alert.innerHTML = `<div class="alert alert-secondary" role="alert">
      El numero magico es Mayor
    </div>`;
    seccionalert.appendChild(alert)
  }
  if (numeroUsuario1 < numeroMagico) {
    let alert = document.createElement("p");
    alert.innerHTML = `<div class="alert alert-primary" role="alert">
        El numero magico es Menor
      </div>`;
      seccionalert.appendChild(alert)
  }
}
