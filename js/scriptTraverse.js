//$("li:first-child").css('background-color', 'steelblue');

//$("#unimportant-events").hide()

//$( "#clickme" ).click(function() {
//  $( "#unimportant-events" ).hide( "slow", function() {
//    alert( "Animation complete." );
//  });
//});
//$( "#important-events" ).children(console.log)
//console.log($("#wrapper"));
//console.log($("#wrapper").children());

//
//  What is the difference
//      Does it matter?
//      my guess is that the first example you can have multiple
//      classes and properties and the second you can only have one.
//

//$("#important-events li:even").css({"background-color": "yellow"});
//$("#important-events li:even").css("background-color", "yellow");

//console.log($("section").children().siblings().first().prev());


//$("#important-events").find("li").css("color", "red");

//why wouldn't this work:
//$("#important-events").find("span").css({"color": "yellow", "font-size": "3em"});

console.log($("li").find("span").css({"color": "yellow", "font-size": "3em"}));

$("#important-events").on("click", function() {
  
  $("#important-events").focus("slide");
  
});

