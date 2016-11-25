/*
|-------------------------------------------
| Calculadora simples em Javascript e jQuery
|-------------------------------------------
|
| Autor ................. Carlu P. Azevedo
| Versão ................ 2.0.2
| Criação ............... 24-set-2015
| Última modificação .... 24-nov-2016
|
| Versão deste arquivo .. 1.1
| Última modificação .... 24-jul-2016
|
*/

window.onload = document.forms[0].valor1.select();

$(document).ready(function(){
  $('.valor').setMask('moeda');
  $('.peso').setMask('peso');
  $('#res_valor').setMask('moeda-decimal');
  $('#res_peso').setMask('peso-decimal');
});

var v = new Array();
var p = new Array();
var v_result = 0;
var p_result = 0;

v = document.getElementsByClassName('valor');
p = document.getElementsByClassName('peso');

console.log("Initial 'valor' array length: " + v.length);
for (i = 0; i < v.length; i++) console.log(v[i].id);

console.log("Initial 'peso' array length: " + p.length);
for (i = 0; i < p.length; i++) console.log(p[i].id);

function addFields() {
  var v_index = v.length + 1;
  var p_index = p.length + 1;

  /* Define o elemento onde serão inseridos os novos campos */
  finsert = document.querySelector('#campos');

  /* Criação dos novos campos a serem inseridos */
  /* Valor */
  vin = document.createElement('INPUT');
  /* Peso */
  pin = document.createElement('INPUT');

  /* Atributos dos novos campos */
  /* Valor */
  vin.setAttribute('type', 'text');
  vin.setAttribute('name', 'valor' + v_index);
  vin.setAttribute('id', 'valor' + v_index);
  vin.setAttribute('class', 'form-control valor');
  vin.setAttribute('value', 0);
  vin.setAttribute('title', 'Valor ' + v_index);
  /* Peso */
  pin.setAttribute('type', 'text');
  pin.setAttribute('name', 'peso' + p_index);
  pin.setAttribute('id', 'peso' + p_index);
  pin.setAttribute('class', 'form-control peso');
  pin.setAttribute('value', 0);
  pin.setAttribute('title', 'Peso ' + p_index);

  /* Inserção dos novos campos */
  finsert.appendChild(vin);
  finsert.appendChild(pin);

  $('#valor' + v_index).setMask('moeda');
  $('#peso' + p_index).setMask('peso');

  document.getElementById('valor' + v_index).select();

  console.log("Updated 'valor' array length: " + v.length);
  console.log("Updated 'peso'  array length: " + p.length);

  window.scrollBy(0, 100);
}

function sumValues() {
  for (i = 0; i < v.length; i++) {
    v_result += parseFloat(v[i].value.replace(",", "."));
  }

  for (i = 0; i < p.length; i++) {
    p_result += parseFloat(p[i].value.replace(",", "."));
  }

  document.forms[0].res_valor.value = v_result.toFixed(2).replace(".", ",");
  document.forms[0].res_peso.value = p_result.toFixed(3).replace(".", ",");

  $('#res_valor').setMask('moeda-decimal');
  $('#res_peso').setMask('peso-decimal');    	

  v_result = 0;
  p_result = 0;
}
