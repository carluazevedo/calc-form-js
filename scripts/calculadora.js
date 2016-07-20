/**
 * Calculadora simples em Javascript e jQuery
 * Autor: Carlu P. Azevedo
 */
$(document).ready(function(){
    $('form').find('.valor').setMask('moeda');
    $('form').find('.peso').setMask('peso');
    $('form').find('#res_valor').setMask('moeda-decimal');
    $('form').find('#res_peso').setMask('peso-decimal');
});

window.onload = document.forms[0].valor1.focus();

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

function addField() {
	var v_index = v.length + 1;
	var p_index = p.length + 1;

    /* Define o seletor que será o ponto de referência para inserção dos novos elementos */
    ip = document.querySelector('#insert_point');

    /* Novos elementos a serem inseridos */
    /* Valor */
    vin = document.createElement('INPUT');
    /* Peso */
    pin = document.createElement('INPUT');

    /* Atributos dos novos elementos */
    /* Valor */
    vin.setAttribute('type', 'text');
    vin.setAttribute('name', 'valor' + v_index);
    vin.setAttribute('id', 'valor' + v_index);
    vin.setAttribute('class', 'form-control valor');
    vin.setAttribute('value', 0);
    /* Peso */
    pin.setAttribute('type', 'text');
    pin.setAttribute('name', 'peso' + p_index);
    pin.setAttribute('id', 'peso' + p_index);
    pin.setAttribute('class', 'form-control peso');
    pin.setAttribute('value', 0);

    /* Inserção dos novos elementos */
    document.forms[0].insertBefore(vin, ip);
    document.forms[0].insertBefore(pin, ip);

    $('form').find('#valor' + v_index).setMask('moeda');
    $('form').find('#peso' + p_index).setMask('peso');

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

    $('form').find('#res_valor').setMask('moeda-decimal');
    $('form').find('#res_peso').setMask('peso-decimal');    	

    v_result = 0;
    p_result = 0;
}
