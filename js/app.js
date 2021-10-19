/*Ejemplo */

class Persona{
  constructor(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
  }
  hablar(){
    console.log("Hola soy "+ this.nombre);
  }
}
const persona1 = new Persona("Juan Paco Pedro de la Mar ", 96, "Av.Mitre 56485 ");
persona1.hablar();
/* 
console.log(" Desafio con objetos");
const persona1 ={ nombre: " Juan " ,apellido : "Perez" , edad:"25"}
const persona2 = {nombre: "Pedro" , apellido : "De la mar" , edad:"32"
}

console.log(persona1);
console.log(persona2);

 */
class Usuario {
  constructor( usuario, contraseña) {
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
  saludar() {
    return "hola " + this.usuario + " estás a punto de cambiar tu vida ";
  }
}
const usuario = prompt("ingrese un nombre de usuario");
const contraseña = prompt("ingrese una contraseña ");
const nuevoUsuario = new Usuario( usuario, contraseña);
alert(nuevoUsuario.saludar());
alert(
  " Comienza tu participación en el proyecto , " +
    nuevoUsuario.usuario +
    " Serás el próximo hacker, " +
    " EMPECEMOS!!! "
);




particlesJS(
    {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#050d4d"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 8
        },
        "image": {
          "src": "img/cb.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1.5,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 9,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.2,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#045212",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": false,
        "straight": true,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });