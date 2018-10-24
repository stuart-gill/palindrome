


$(document).ready(function(){
  $("form#userPhrase").submit(function(event){
    event.preventDefault();
    var inputPhrase = $("input#userPhrase").val();
    var palindrome = function(inputPhrase){
      return inputPhrase == inputPhrase.split("").reverse().join("");
    };
    $("#answer").text(palindrome(inputPhrase));
  });
});
