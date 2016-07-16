/*
 * Adaptação do script que muda a função da tecla 'ENTER' para a mesma função da tecla 'TAB'
 * Descrição: Possibilita navegação entre elementos tanto com 'ENTER' quanto com 'SHIFT+ENTER'.
 *            Navega apenas pela sequência dos campos. Código mais enxuto.
 * Fonte: stackoverflow.com/questions/1009808/enter-key-press-behaves-like-a-tab-in-javascript
 * Data: 20-out-2015
 */

// Map [Enter] key to work like the [Tab] key
// Daniel P. Clark 2014

// Catch the keydown for the entire document
$(document).keydown(function(e) {

  // Set self as the current item in focus
  var self = $(':focus'),
      // Set the form by the current item in focus
      form = self.parents('form:eq(0)'),
      focusable;

  // Array of Indexable/Tab-able items
  focusable = form.find(':text, #somar');

  function enterKey(){
    if (e.which === 13 && !self.is('textarea,div[contenteditable=true]')) { // [Enter] key

      // If not a regular hyperlink/button/textarea
      if ($.inArray(self, focusable) && (!self.is('a,button'))){
        // Then prevent the default [Enter] key behaviour from submitting the form
        e.preventDefault();
      } // Otherwise follow the link/button as by design, or put new line in textarea

      // Focus on the next item (either previous or next depending on shift)
      focusable.eq(focusable.index(self) + (e.shiftKey ? -1 : 1)).focus();

      return false;
    }
  }
  // We need to capture the [Shift] key and check the [Enter] key either way.
  if (e.shiftKey) { enterKey() } else { enterKey() }
});
