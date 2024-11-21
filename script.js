let button = document.querySelector(".scroll-arriba");

window.onscroll = function () {
  if (window.scrollY > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const camposFormulario = {
    nombre: document.getElementById("nombre"),
    apellido: document.getElementById("apellido"),
    email: document.getElementById("email"),
    telefono: document.getElementById("numero-telefono"),
    edad: document.getElementById("edad"),
    direccion: document.getElementById("direccion"),
    provincia: document.getElementById("provincia"),
    codigoPostal: document.getElementById("codigo-postal"),
    metodoContacto: document.querySelectorAll("[name='metodo-contacto']"),
    subscripcion: document.querySelectorAll("[name='subscripcion']"),
  };

  const resultadoCampos = {
    nombre: document.getElementById("resultadoNombre"),
    apellido: document.getElementById("resultadoApellido"),
    email: document.getElementById("resultadoEmail"),
    telefono: document.getElementById("resultadoTelefono"),
    edad: document.getElementById("resultadoEdad"),
    direccion: document.getElementById("resultadoDireccion"),
    provincia: document.getElementById("resultadoProvincia"),
    codigoPostal: document.getElementById("resultadoCodigoPostal"),
    metodoContacto: document.getElementById("resultadoMetodoContacto"),
    subscripcion: document.getElementById("resultadoSubscripcion"),
  };

  const actualizarCampo = (campo, valor) => {
    resultadoCampos[campo].textContent = valor;
  };

  for (let campo in camposFormulario) {
    if (campo === "metodoContacto") {
      camposFormulario[campo].forEach((radio) => {
        radio.addEventListener("change", () => {
          const seleccionado = document.querySelector(
            "[name='metodo-contacto']:checked"
          );
          actualizarCampo(campo, seleccionado ? seleccionado.id : "N/A");
        });
      });
    } else if (campo === "subscripcion") {
      camposFormulario[campo].forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const seleccionados = Array.from(camposFormulario[campo])
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.id)
            .join(", ");
          actualizarCampo(campo, seleccionados || "Ninguna");
        });
      });
    } else {
      camposFormulario[campo].addEventListener("input", (event) => {
        actualizarCampo(campo, event.target.value);
      });
    }
  }
});

document.getElementById("leerMasBtn").addEventListener("click", () => {
  const cvInfo = document.getElementById("cv-info");
  const leerMasBtn = document.getElementById("leerMasBtn");

  // cvInfo.style.display = "none";

  if (cvInfo.style.display === "none" || cvInfo.style.display === "") {
    cvInfo.style.display = "block";
    leerMasBtn.innerText = "Cerrar";
  } else {
    cvInfo.style.display = "none";
    leerMasBtn.innerText = "Leer más";
  }
});
