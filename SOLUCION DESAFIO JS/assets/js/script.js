function promedio(n1,n2,n3){
    n1=parseInt(n1)
    n2=parseInt(n2)
    n3=parseInt(n3)
    return ((n1+n2+n3)/3).toFixed(2)
}

/*AQUI COMIENZA EL DESAFIO*/

var html1=document.getElementById("HTML1")
var html2=document.getElementById("HTML2")
var html3=document.getElementById("HTML3")
var htmlprom=document.getElementById("HTMLPromedio")

var nota1html= prompt("ingrese nota 1")
var nota2html= prompt("ingrese nota 2")
var nota3html= prompt("ingrese nota 3")

html1.innerHTML = nota1html
html2.innerHTML = nota2html
html3.innerHTML = nota3html

htmlprom.innerHTML=promedio(nota1html,nota2html,nota3html)

/*css*/
var css1=document.getElementById("CSS1")
var css2=document.getElementById("CSS2")
var css3=document.getElementById("CSS3")
var cssprom=document.getElementById("CSSPromedio")


var nota1css= prompt("ingrese nota 1")
var nota2css= prompt("ingrese nota 2")
var nota3css= prompt("ingrese nota 3")

css1.innerHTML = nota1css
css2.innerHTML = nota2css
css3.innerHTML = nota3css

cssprom.innerHTML=promedio(nota1css,nota2css,nota3css)

/**js */

var js1=document.getElementById("js1")
var js2=document.getElementById("js2")
var js3=document.getElementById("js3")
var jsprom=document.getElementById("JAVASCRIPTPromedio")


var nota1js= prompt("ingrese nota 1")
var nota2js= prompt("ingrese nota 2")
var nota3js= prompt("ingrese nota 3")

JAVASCRIPT1.innerHTML = nota1js
JAVASCRIPT2.innerHTML = nota2js
JAVASCRIPT3.innerHTML = nota3js

jsprom.innerHTML=promedio(nota1js,nota2js,nota3js)