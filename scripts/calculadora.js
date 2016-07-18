/**
 * Calculadora simples em jQuery
 * 
 * Autor: Carlu P. Azevedo
 */
$(document).ready(function(){
	var somavalor = 0, somapeso = 0;

	$("form").find(".valor").setMask("moeda");
	$("form").find(".peso").setMask("peso");

	$("#somar").click(function() {
		$("form").find(".valor").each(function(){
			somavalor += parseFloat($(this).val().replace(",", "."));
		});

		$("form").find(".peso").each(function(index){
			somapeso += parseFloat($(this).val().replace(",", "."));
		});

		$("#resvalor").val(somavalor.toFixed(2).replace(".", ","));
		$("#respeso").val(somapeso.toFixed(3).replace(".", ","));

		$("#resvalor").setMask("moeda-decimal");
		$("#respeso").setMask("peso-decimal");

		somavalor = 0;
		somapeso = 0;
	});
});
