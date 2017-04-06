


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
    if (homeless === "sorry") {
      $("#homeless1").show();
      $("#checkphone").show();
      
    } else if (homeless === "jerk") {
      $("#homeless2").show();
    } else if (homeless === "sure") {
      $("#homeless3").show();
      $("#checkphone").show();

    }
  });
  $("form#first-text").submit(function(event) {

     event.preventDefault();

    $("#first-message-results").show();
    var firstText = $("input:radio[name=first]:checked").val();

    if (firstText === "fleek") {
      $("#fleek-message").show();

    } else if (firstText === "zizek") {
      $("#philosophy-message").show();
    } else if (firstText === "what-movie") {
      $("#movie-message").show();
      $("#movie-reply").show();
    }  else if (firstText === "what-music") {
      $("#music-message").show();
      $("#music-reply").show();
    }

      });

  });
