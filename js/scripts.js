


<<<<<<< 637894f59297229bd007ed55171fb4b5625da79a
$(function() {
$("#show").click(function(event){
  $('#button1').click(function () {
          jQuery(this).children('#deathwell1').first().toggle("slow");
      });




//  $event.preventDefault();
  //  $("").show();
   });
=======
$(document).ready(function() {
  $("form#breakfast").submit(function(event) {
    event.preventDefault();
    $("#breakfastResult").show();
    var breakfast = $("input:radio[name=firstMeal]:checked").val();
    console.log(breakfast);
    if (breakfast === "fish") {
      $("#fishBreakfast").show();
    } else if (breakfast === "eggs"){
      $("#fivekOne").show();
      $("#homelessSituation").show();
    } else if (breakfast === "cereal"){
      $("#fivekTwo").show();
      $("#homelessSituation").show();
    } else if (breakfast === "smoothie"){
      $("#fivekThree").show();
      $("#homelessSituation").show();


    }
  });
  $("#homelessChoice").submit(function(event) {
      event.preventDefault();
    $("#homelessResults").show();
    var homeless = $("input:radio[name=homelessReply]:checked").val();
    console.log(homeless);
    if (homeless === "sorry") {
      $("#homeless1").show();
    } else if (homeless === "jerk") {
      $("#homeless2").show();
    } else if (homeless === "sure") {
      $("#homeless3").show();
    }
  });
>>>>>>> finished jquery and js, established html and css design scheme
});
