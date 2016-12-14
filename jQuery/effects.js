// FADE -- manipulates the opacity on elements

// commenting out since it's messing with my toggle fade
// $("button").on("click", function() {
//     $(".faded").fadeOut(1000); // this is in ms
//     console.log("Fade Completed")
// });

$("#syncFade").on("click", function() {
    $(".faded").fadeOut(1000, function() {
        $(this).remove();
        console.log("Fade Completed and Elems Removed");
    });
});

$("#sheReturns").on("click", function() {
    $(".faded").fadeIn(1000);
});

$("#undecided").on("click", function() {
    $(".faded").fadeToggle(1000);
});

// SLIDEDOWN/UP -- slides elemn up/down in height (TOGGLE can alternate them)
$("#toggleSlide").on("click", function() {
    $(".faded").slideToggle(1000, function() {
        console.log("Showing optional call back for the slide toggle functions which are called once slides are done");
    });
});
