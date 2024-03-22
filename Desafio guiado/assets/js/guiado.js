//HTML
const html1 = document.getElementById("html1");
const html2 = document.getElementById("html2");
const html3 = document.getElementById("html3");
const prom_html = document.getElementById("prom_html");

var nota_html1 = +prompt('Ingrese la nota 1 de html');
var nota_html2 = +prompt('Ingrese la nota 2 de html');
var nota_html3 = +prompt('Ingrese la nota 3 de html');

html1.innerHTML = nota_html1;
html2.innerHTML = nota_html2;
html3.innerHTML = nota_html3;

prom_html.innerHTML = ((nota_html1+nota_html2+nota_html3)/3).toFixed(2);

//CSS
const css1 = document.getElementById("css1");
const css2 = document.getElementById("css2");
const css3 = document.getElementById("css3");
const prom_css = document.getElementById("prom_css");

var nota_css1 = +prompt('Ingrese la nota 1 de css');
var nota_css2 = +prompt('Ingrese la nota 2 de css');
var nota_css3 = +prompt('Ingrese la nota 3 de css');

css1.innerHTML = nota_css1;
css2.innerHTML = nota_css2;
css3.innerHTML = nota_css2;

prom_html.innerHTML = ((nota_css1+nota_css2+nota_css3)/3).toFixed(2);

//JS
const js1 = document.getElementById("js1");
const js2 = document.getElementById("js2");
const js3 = document.getElementById("js3");
const prom_js = document.getElementById("prom_js");

var nota_js1 = +prompt('Ingrese la nota 1 de javascript');
var nota_js2 = +prompt('Ingrese la nota 2 de javascript');
var nota_js3 = +prompt('Ingrese la nota 3 de javascript');

js1.innerHTML = nota_js1;
js2.innerHTML = nota_js2;
js3.innerHTML = nota_js3;

prom_html.innerHTML = ((nota_js1 + nota_js2 + nota_js3)/3).toFixed(2);