/* Captura de valores para la asignatura de HTML, donde se utiliza una variable
* y se guarda el valor leido directamente en la id del documento HTML.

var html1 = document.getElementById('html1').innerHTML = prompt('Ingrese la nota 1 de HTML ');
var html2 = document.getElementById('html2').innerHTML = prompt('Ingrese la nota 2 de HTML ');
var html3 = document.getElementById('html3').innerHTML = prompt('Ingrese la nota 3 de HTML ');
var prom_html = document.getElementById('prom_html');

prom_html.innerHTML = ((parseInt(html1) + parseInt(html2) + parseInt(html3)) / 3).toFixed(2);

// CSS
var css1 = document.getElementById('css1');
var css2 = document.getElementById('css2');
var css3 = document.getElementById('css3');
var prom_css = document.getElementById('prom_css');

var nota_css1 = +prompt('Ingrese la nota 1 de CSS ');
var nota_css2 = +prompt('Ingrese la nota 2 de CSS ');
var nota_css3 = +prompt('Ingrese la nota 3 de CSS ');

css1.innerHTML = nota_css1;
css2.innerHTML = nota_css2;
css3.innerHTML = nota_css3;

prom_css.innerHTML = ((nota_css1 + nota_css2 + nota_css3) / 3).toFixed(2)

// HTML
var js1 = document.getElementById('js1');
var js2 = document.getElementById('js2');
var js3 = document.getElementById('js3');
var prom_js = document.getElementById('prom_js');

var nota_js1 = +prompt('Ingrese la nota 1 de JS ');
var nota_js2 = +prompt('Ingrese la nota 2 de JS ');
var nota_js3 = +prompt('Ingrese la nota 3 de JS ');

js1.innerHTML = nota_js1;
js2.innerHTML = nota_js2;
js3.innerHTML = nota_js3;

prom_js.innerHTML = ((nota_js1 + nota_js2 + nota_js3) / 3).toFixed(2)

*/
/* ciclos en Javascript */
/* For 
for (let i = 0; i < 5; i++){
    console.log('valor de i ->'+i);
}

/* while 
let contador = 0
let salir = true;
while (!salir) { 
    console.log('Valor de contador '+contador);
    contador++;
    if (contador == 3) {
        salir = false;
    };
}
/*do-while 
let contador2 = 5;
do {
    console.log('Contador2 -> ' + contador2);
    contador2++;
} while(contador2 < 5)
*/

/* Codigo nuevo con Jquery */

function notasHtml(){
   
    $('#html1').html($('#nota1Html').val());
    $('#html2').html($('#nota2Html').val());
    $('#html3').html($('#nota3Html').val());   
    let promedio_html = ((parseInt($('#nota1Html').val()) + parseInt($('#nota2Html').val()) + parseInt($('#nota3Html').val())) / 3).toFixed(2);
    $('#prom_html').html(promedio_html);    

    $('#nota1Html').val('');
    $('nota2Html').val('');
    $('nota3Html').val('');
    $('htmlModal').val('');
    $('#htmlModal').modal('hide');
}

function limpiarHtml(){
    $('#html1').val('');
    $('#html2').val('');
    $('#html3').val('');
    $('#prom_html').val('');
}
