


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
      $("#first-text").show();
    } else if (homeless === "jerk") {
      $("#homeless2").show();
    } else if (homeless === "sure") {
      $("#homeless3").show();
      $("#checkphone").show();
      $("#first-text").show();
    }
  });
  $("#text-one").submit(function(event) {

    //  event.preventDefault();

    $("#first-text").show();
    var firstText = $("input:radio[name=first]:checked").val();
    console.log(firstText);
    if (firstText === "fleek") {
      $("#first-message-results").show();
    } else if (firstText === "zizek") {
      $("#philosophy-message").show();
    } else if (firstText === "what-movie") {
      $("#movie-message").show();
    }  else if (firstText === "what-music") {
      $("#music-message").show();
    }

      });

  });
