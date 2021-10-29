/* console.log("DOM");
 *//* document.querySelector('h2').textContent = 'Lo hago desde JS';
console.log(document.querySelector('h2')); */

/* document.querySelector('h4').textContent = "PROBANDO"
console.log(document.querySelector('h4'));
console.log(document.querySelector('.probando'));
console.log(document.querySelector('#lista')); 

 */
/* const hackers = document.querySelector('#lista');

hackers.textContent = 'textotextotexto'; /*funciona el de abajo*/ 
/* hackers.innerHTML = ' <b>Aca va otro texto en negrita</b>'
 */

const lista = document.getElementById('lista')
/* console.log(lista)
  la saco para que me cree*/


const arrayElement = [ 'Mi primera lista con JavaScript','Medio','Dificil fue xD']

arrayElement.forEach(item => {
/*     console.log(item)
 */  const li = document.createElement('li')
    li.textContent = item
    lista.appendChild(li)})


